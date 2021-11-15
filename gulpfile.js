const gulp = require("gulp");
const { src, dest, series, parallel, lastRun } = require("gulp");
const ejs = require("gulp-ejs");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const uglifycss = require("gulp-uglifycss");
const terser = require("gulp-terser");
const image = require("gulp-image");
// const resizer = require("gulp-image-resize");
const browserSync = require("browser-sync").create();
const watch = require("gulp-watch");

const paths = {
  html: {
    src: ["./src/index.html"],
    dest: "./www/",
  },
  images: {
    src: ["./src/img/**/*.jpg"],
    dest: "./www/img/",
  },
  styles: {
    src: ["./src/*.scss", "./src/**/*.scss"],
    dest: "./www/css/",
  },
  scripts: {
    src: ["./src/js/*.js"],
    dest: "./www/js/",
  },
  //  Mentor: A quoi sert et dois je installer cachebust? ******************************************************
  // cachebust: {
  //   src: ["./dist/**/*.html"],
  //   dest: "./dist/",
  // },
};

function optimizeImg() {
  return (
    src(paths.images.src, { since: lastRun(optimizeImg) })
      .pipe(image())
      // .pipe(
      //   resizer({
      //     width: 100,
      //     height: 100,
      //     crop: true,
      //     imageMagick: true,
      //   })
      // )
      .pipe(dest(paths.images.dest))
  );
}

function watcher() {
  browserSync.init({
    server: {
      baseDir: "./www",
    },
  });
  watch(paths.html.src, series(makeHtml, browserSync.reload));
  watch(paths.styles.src, series(makeCss, browserSync.reload));
  //   watch(paths.scripts.src, series(minifyScripts, browserSync.reload));
  watch(paths.images.src, series(optimizeImg, browserSync.reload));
  watch("./src/**/*.html", series(makeHtml, browserSync.reload));
}

function minifyScripts() {
  return src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat("index.js"))
    .pipe(terser().on("error", (error) => console.log(error)))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.scripts.dest));
}

function makeCss() {
  var plugins = [autoprefixer(), cssnano()];
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

module.exports = {
  makeHtml,
  makeCss,
  minifyScripts,
  optimizeImg,
  watcher,
};
