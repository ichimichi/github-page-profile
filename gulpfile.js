var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");
var minify = require("gulp-minify");
var cssMinify = require("gulp-css-minify");

function buildStyles() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"));
}

gulp.task("css", buildStyles);

gulp.task("pack-js", function () {
  return gulp
    .src(["src/**/*.js"])
    .pipe(concat("bundle.js"))
    .pipe(minify())
    .pipe(gulp.dest("public/build"));
});

gulp.task("pack-css", function () {
  return gulp
    .src(["public/css/style.css"])
    .pipe(concat("style.css"))
    .pipe(cssMinify())
    .pipe(gulp.dest("public/build"));
});

gulp.task("pack-html", function () {
  return gulp
    .src(["src/index.html"])
    .pipe(concat("index.html"))
    .pipe(gulp.dest("public/build"));
});

gulp.task("pack-assets", function () {
  return gulp.src(["src/assets/*"]).pipe(gulp.dest("public/build"));
});