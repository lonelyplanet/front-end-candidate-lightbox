var gulp = require('gulp');

gulp.task('build', ['images', 'scss', 'nunjucks', 'scripts', 'scripts-minify']);
