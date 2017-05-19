var gulp                = require('gulp');
var scss                = require('gulp-sass');
var cssnano             = require('gulp-cssnano');
var prefix              =  require('gulp-autoprefixer');
var notify              = require('gulp-notify');
var handleErrors        = require('../util/handleErrors');
var sourcemaps          = require('gulp-sourcemaps');
var plumber             = require('gulp-plumber');


// Sass
gulp.task('scss', function() {
  return gulp.src('src/scss/**/*.*')
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(prefix())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css/'))
});