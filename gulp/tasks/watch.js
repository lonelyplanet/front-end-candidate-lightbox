var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch('src/scss/**', ['scss']);
	gulp.watch('src/img/**', ['images']);
  gulp.watch('src/js/*.js', ['scripts', 'scripts-minify']);
	gulp.watch('src/**/*.html', ['nunjucks']);
});