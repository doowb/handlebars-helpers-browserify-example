'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('browserify', function () {
  var b = browserify({
    entries: './app.js',
    debug: true,
    // Tell browserify that Handlebars is loaded already
    external: 'Handlebars'
  });

  // ignore the internal handlebars require
  b.ignore('handlebars');

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['browserify']);
