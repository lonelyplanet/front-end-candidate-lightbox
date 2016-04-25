var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('images', function() {
	var dest = './public/img';

	return gulp.src('./src/img/**')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })) // Optimize
		.on('error', handleErrors)
    .pipe(gulp.dest(dest));
});
