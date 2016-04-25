var gulp = require('gulp');
var del = require('del');

gulp.task('clean:all', function (cb) {
	del([
		'public/css/**',
		'public/js/**',
		'public/lib/**'
	], cb);
});