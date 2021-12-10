// const gulp = require("gulp");
const { src, dest, series, lastRun } = require("gulp");
const ejs = require("gulp-ejs");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const uglifycss = require("gulp-uglifycss");

const image = require("gulp-image");
const resizer = require("gulp-image-resize");
const browserSync = require("browser-sync").create();
const watch = require("gulp-watch");
const webpack = require("webpack");
const newLocal = "./webpack.config";
const webpackCfg = require(newLocal);

const paths = {
	html: {
		src: ["./src/pages/**/*.html"],
		dest: "./www/",
	},
	images: {
		src: ["./src/img/**/*.jpg", "./src/img/**/*.svg"],
		dest: "./www/img/",
	},
	styles: {
		src: ["./src/base.scss", "./src/**/*.scss"],
		dest: "./www/css/",
	},
	scripts: {
		src: ["./src/**/*.js"],
		// dest: "./www/js/",
	},

	//  Mentor: A quoi sert et dois je installer cachebust? ******************************************************
	// cachebust: {
	//   src: ["./dist/**/*.html"],
	//   dest: "./dist/",
	// },
};

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

// function minifyPhotographerScripts() {
// 	return src(paths.photographerScripts.src)
// 		.pipe(sourcemaps.init())
// 		.pipe(concat("photographer.js"))
// 		.pipe(uglify())
// 		.pipe(sourcemaps.write())
// 		.pipe(dest(paths.photographerScripts.dest));
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
	watcher,
};
