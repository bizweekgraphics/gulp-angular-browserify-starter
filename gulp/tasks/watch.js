var gulp = require('gulp');

module.exports = function() {
  
  gulp.watch(['./src/**/*.js'], ['replace', 'browserify', 'jshint'])

  gulp.watch('./src/**/*.scss', ['sass']);

  gulp.watch(['./public/index.html'], ['html']);

  gulp.watch('./src/**/*.html', ['nghtml2js', 'browserify']);

}