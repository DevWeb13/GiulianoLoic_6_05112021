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
    src: ["./src/pages/index/index.html"],
    dest: "./www/",
  },
  photographerHtml: {
    src: ["./src/pages/photographer/photographer.html"],
    dest: "./www/",
  },
  images: {
    src: ["./src/img/**/*.jpg", "./src/img/**/*.svg"],
    dest: "./www/img/",
  },
  styles: {
    src: [
      "./src/base.scss",
      "./src/components/**/*.scss",
      "./src/layouts/**/*scss",
      "./src/pages/index/index.scss",
    ],
    dest: "./www/css/",
  },
  photographerStyles: {
    src: [
      "./src/base.scss",
      "./src/components/**/*.scss",
      "./src/layouts/article/*scss",
      "./src/pages/photographer/photographer.scss",
    ],
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

// function minifyScripts() {
//   return src(paths.scripts.src)
//     .pipe(sourcemaps.init())
//     .pipe(concat("index.js"))
//     .pipe(terser().on("error",  gulp.logError))
//     .pipe(sourcemaps.write("."))
//     .pipe(dest(paths.scripts.dest));
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

function makePhotographerCss() {
  let plugins = [autoprefixer(), cssnano()];
  return src(paths.photographerStyles.src)
    .pipe(sourcemaps.init())
    .pipe(concat("photographer.css"))
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(uglifycss())
    .pipe(sourcemaps.write())
    .pipe(dest(paths.photographerStyles.dest));
}

function makeHtml() {
  return src(paths.html.src).pipe(ejs()).pipe(dest(paths.html.dest));
}

function makePhotographerHtml() {
  return src(paths.photographerHtml.src)
    .pipe(ejs())
    .pipe(dest(paths.photographerHtml.dest));
}

function watcher() {
  browserSync.init({
    server: {
      baseDir: "./www/",
    },
  });
  watch(paths.html.src, series(makeHtml, browserSync.reload));
  watch(
    paths.photographerHtml.src,
    series(makePhotographerHtml, browserSync.reload)
  );
  watch(paths.styles.src, series(makeCss, browserSync.reload));
  watch(
    paths.photographerStyles.src,
    series(makePhotographerCss, browserSync.reload)
  );
  //   watch(paths.scripts.src, series(minifyScripts, browserSync.reload));
  watch(paths.images.src, series(optimizeImg, browserSync.reload));
  watch(
    "./src/**/**/*.html",
    series(parallel(makeHtml, makePhotographerHtml), browserSync.reload)
  );
  watch(
    "./src/**/**/*.scss",
    series(parallel(makeCss, makePhotographerCss), browserSync.reload)
  );
}

module.exports = {
  makeHtml,
  makePhotographerHtml,
  makeCss,
  makePhotographerCss,
  //   minifyScripts,
  optimizeImg,
  watcher,
};
