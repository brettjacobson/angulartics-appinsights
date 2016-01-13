var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require("gulp-rename"),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

gulp.task('default', ['uglify']);

gulp.task('test', ['jshint', 'karma']);

gulp.task('uglify', function() {
  return gulp.src('./src/angulartics-appinsights.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function() {
  return gulp.src(['./*.js', './src/**/*.js', './test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('karma', function() {

});
