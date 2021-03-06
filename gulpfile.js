// const gulp = require("gulp");
const { src, dest, series, lastRun } = require("gulp");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const cssnano = require("cssnano");
const ejs = require("gulp-ejs");
const image = require("gulp-image");
const newLocal = "./webpack.config";
const postcss = require("gulp-postcss");
const resizer = require("gulp-image-resize");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglifycss = require("gulp-uglifycss");
const watch = require("gulp-watch");
const way2enjoy = require("way2enjoy-gulp");
const webpack = require("webpack");
const webpackCfg = require(newLocal);

const paths = {
	html: {
		src: ["./src/pages/**/*.html"],
		dest: "./www/",
	},
	images: {
		src: ["./src/img/**/*.jpg", "./src/img/**/*.svg"],
		dest: "./www/img/photos/",
	},
	videos: {
		src: ["./src/img/**/*.mp4"],
		dest: "./www/img/videos",
	},
	styles: {
		src: ["./src/base.scss", "./src/**/*.scss"],
		dest: "./www/css/",
	},
	scripts: {
		src: ["./src/**/*.js"],
		// dest: "./www/js/",
	},
};

function optimizeVideo() {
	return src(paths.videos.src, { since: lastRun(optimizeVideo) })
		.pipe(
			way2enjoy({
				key: "API_KEY",
				sigFile: "images/.way2enjoy-sigs",
				log: true,
			})
		)
		.pipe(dest(paths.videos.dest));
}

function optimizeImg() {
	return src(paths.images.src, { since: lastRun(optimizeImg) })
		.pipe(image())
		.pipe(
			resizer({
				width: 416,
				height: 416,
				crop: true,
				imageMagick: true,
			})
		)
		.pipe(dest(paths.images.dest));
}

// eslint-disable-next-line no-unused-vars
function buildJs(cb) {
	return new Promise((resolve, reject) => {
		webpack(webpackCfg, (err, stats) => {
			if (err) {
				return reject(err);
			}
			if (stats.hasErrors()) {
				return reject(new Error(stats.compilation.errors.join("\n")));
			}
			resolve();
		});
	});
}

// function buildJs() {
// 	return src("./src/app.js")
// 		.pipe(sourcemaps.init())
// 		.pipe(concat("app.js"))
// 		.pipe(uglify())
// 		.pipe(sourcemaps.write())
// 		.pipe(dest(paths.scripts.dest));
// }

function makeCss() {
	let plugins = [autoprefixer(), cssnano()];

	return src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(concat("index.css"))
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss(plugins))
		.pipe(uglifycss())
		.pipe(sourcemaps.write())
		.pipe(dest(paths.styles.dest));
}

function makeHtml() {
	return src(paths.html.src).pipe(ejs()).pipe(dest(paths.html.dest));
}

function watcher() {
	browserSync.init({
		server: {
			baseDir: "./www/",
		},
	});
	watch(paths.html.src, series(makeHtml, browserSync.reload));
	watch("./src/pages/index/**/**/*.html", series(makeHtml, browserSync.reload));
	watch("./src/components/**/*.html", series(makeHtml, browserSync.reload));

	watch(paths.styles.src, series(makeCss, browserSync.reload));

	watch(paths.scripts.src, series(buildJs, browserSync.reload));
}

module.exports = {
	makeHtml,
	makeCss,
	buildJs,
	optimizeImg,
	optimizeVideo,
	watcher,
};
