var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cssMinify = require('gulp-css-minify');
const Importer = require('gulp-importer').default;
const del = require('del');

const importer = new Importer({
    encoding: 'utf-8', // Check the available encodings in the options
    dependencyOutput: 'dependant',
});

gulp.task('clean', function () {
    return del(['public/**'], { force: true });
});

gulp.task('css', function () {
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(importer.execute())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('pack-js', function () {
    return gulp
        .src(['src/**/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/build'));
});

gulp.task('pack-css', function () {
    return gulp
        .src(['public/css/style.css'])
        .pipe(concat('style.css'))
        .pipe(cssMinify())
        .pipe(gulp.dest('public/build'));
});

gulp.task('pack-html', function () {
    return gulp.src(['src/*.html']).pipe(gulp.dest('public/build'));
});

gulp.task('pack-assets', function () {
    return gulp.src(['src/assets/*']).pipe(gulp.dest('public/build'));
});

gulp.task('pack-fonts', function () {
    return gulp
        .src(['src/webfonts/*'])
        .pipe(gulp.dest('public/build/webfonts'));
});
