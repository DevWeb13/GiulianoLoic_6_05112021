const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglifycss = require("gulp-uglifycss");
const ejs = require("gulp-ejs");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

function makeCss() {
  return gulp
    .src(["./src/base.scss", "./src/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(concat("style.css"))
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(uglifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("www/css"));
}

function makeHtml() {
  return gulp.src("./src/pages/*.html").pipe(ejs()).pipe(gulp.dest("./www"));
}

function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./www",
    },
  });

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch("./src/**/*.scss", makeCss);
  gulp.watch("./src/**/*.html", makeHtml);
  gulp.watch("./www", reload);
}

module.exports = {
  makeCss,
  makeHtml,
  watch,
};
