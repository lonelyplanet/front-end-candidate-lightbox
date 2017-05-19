var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

// -----------------------------------------------------------------------------
// Templating
// -----------------------------------------------------------------------------

gulp.task('nunjucks', function() {
  nunjucksRender.nunjucks.configure(['./src/layouts']);
  // Gets .html and .nunjucks files in pages
  return gulp.src('./src/pages/*.html')
  // Renders template with nunjucks
  .pipe(nunjucksRender())
  // output files in dist folder
  .pipe(gulp.dest('./public'))
});