const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require('gulp-csso');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const del = require('del');
const cheerio = require("gulp-cheerio");

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html));
  gulp.watch("source/js/*.js", gulp.series(js));
}

exports.watcher = watcher


// HTML
const html = () => {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build"))
    .pipe(sync.stream())
}

exports.html = html

// Js
const js = () => {
  return gulp.src("source/js/*.js")
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream())
}

exports.js = js


//Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimatizationLevel: 3}),
      imagemin.mozjpeg({quality: 75,progressive: true}),
      imagemin.svgo()
    ]))
}

  exports.images = images;

  //Webp

  const webpimages = () => {
    return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp())
    .pipe(gulp.dest("source/img"))
  }

  exports.webpimages = webpimages;

  //Sprite

 const sprite = () => {
    return gulp.src("source/img/**/*.svg")
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
  }

  exports.sprite = sprite;


//Del

const clean = () => {
  return del("build");
};

exports.clean = clean;

  //Copy

  const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.ico",
    "source/*.html",
    "source/css/**"
  ], {
      base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;

//Copyhtml

const copyhtml = () => {
  return gulp.src([
    "source/*.html"
  ], {
      base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copyhtml = copyhtml;


//Build

const build = (done) => gulp.series(
  clean,
  copy,
  styles,
  sprite)
  (done);

exports.build = build;

//Start

exports.default = gulp.series(
  clean,
  copy,
  styles,
  sprite,
  server,
  watcher
);
