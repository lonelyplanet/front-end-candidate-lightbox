var gulp        = require('gulp');
var browserSync = require('browser-sync');
var harp        = require('harp');
var config      = require('../config');

gulp.task('serve', function() {
  browserSync.init(['public/**'],{
    proxy: "localhost:9000",
    xip: true,
    notify: false
  });
  harp.server(config.root, {
    port: 9000
  }, function() {
    browserSync.reload();
  })
});