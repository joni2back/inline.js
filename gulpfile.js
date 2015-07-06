'use strict';

// Require
var gulp = require('gulp');
var uglify = require('gulp-uglify');                        // minifies JavaScript
var concat = require('gulp-concat');                        // concat JavaScript
var path = require('path');

// Vars
var dst = './dist/';

gulp.task('minify-js', function() {
  return gulp.src([
      'inline.js'
    ])
    .pipe(concat('inline.js.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dst))
});

gulp.task('default', ['minify-js']);
gulp.task('build', ['default']);