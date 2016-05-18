'use strict';

var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var del = require('delete');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('browserify', function () {
  var b = browserify({
    entries: './src/app.js',
    debug: true,
    // Tell browserify that Handlebars is loaded already
    external: 'Handlebars'
  });

  // ignore the internal handlebars require
  b.ignore('handlebars');

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./_gh_pages/'))
    .pipe(browserSync.stream());
});

gulp.task('clean', function(cb) {
  del('./.publish', {force: true}, function(err) {
    if (err) return cb(err);
    del('./_gh_pages', {force: true}, cb);
  });
});

gulp.task('copy', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('_gh_pages'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function(cb) {
  browserSync.init({
    port: 8080,
    startPath: 'index.html',
    server: {
      baseDir: '_gh_pages'
    }
  }, cb);
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*'], gulp.series('build'));
});

gulp.task('deploy', function() {
  return gulp.src('_gh_pages/**/*')
    .pipe(ghPages());
});

gulp.task('build', gulp.parallel(['browserify', 'copy']));
gulp.task('dev', gulp.series('build', gulp.parallel('serve', 'watch')));
gulp.task('default', gulp.series('build'));
