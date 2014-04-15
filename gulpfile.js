'use strict';

var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mocha  = require('gulp-mocha');
var bump   = require('gulp-bump');
var istanbul = require('gulp-istanbul');

var paths = {
  lint: ['./gulpfile.js', './lib/**/*.js'],
  tests: ['./test/**/*.js', '!test/{temp,temp/**}'],
  source: ['./lib/*.js']
};

gulp.task('lint', function () {
  return gulp.src(paths.lint)
    .pipe(jshint('.jshintrc'))
    .pipe(jscs())
    .pipe(jshint.reporter('jshint-stylish'));
});

// gulp.task('mocha', function () {
//   gulp.src(paths.tests)
//     .pipe(mocha({ reporter: 'list' }));
// });

gulp.task('test', function (cb) {
  gulp.src(paths.source)
    .pipe(istanbul()) // Covering files
    .on('end', function () {
      gulp.src(paths.tests)
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});

gulp.task('bump', ['test'], function () {
  var bumpType = process.env.BUMP || 'patch'; // major.minor.patch

  return gulp.src(['./package.json'])
    .pipe(bump({ type: bumpType }))
    .pipe(gulp.dest('./'));
});

// gulp.task('test', ['lint', 'mocha']);
gulp.task('release', ['bump']);
