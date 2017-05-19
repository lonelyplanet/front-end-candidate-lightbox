var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var config       = require('../config');
var gulp         = require('gulp');
var runSequence  = require('run-sequence');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

gulp.task('scripts', function() {

  var bundler = browserify({
    entries: ['./src/js/lightbox.js'],
    extensions: ['.js', '.js'],
    debug: true
  }).transform("babelify", {presets: ["es2015", "react"]});

  var bundle = function() {
    bundleLogger.start();
    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('lightbox.js'))
      .pipe(gulp.dest('./public/js/'))
      .on('end', bundleLogger.end);
  }
  // add environment check
	bundler = watchify(bundler);
  bundler.on('update', function(){
  	bundle();
  });

  return bundle();
});

// Minify scripts in place
gulp.task('scripts-minify', ['scripts'], function(){
  return gulp.src('./public/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/js/'));
});