var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	return runSequence('build','serve','watch');
});