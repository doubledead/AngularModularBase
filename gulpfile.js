'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

var reload = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


// Watch Files For Changes & Reload
gulp.task('serve', [], function () {
  browserSync({
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'WSK',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ["./"]
  });
  gulp.watch("index.html").on('change', reload);
  gulp.watch("partials/*.html").on('change', reload);
  gulp.watch("scripts/**/*.js").on('change', reload);
  gulp.watch("styles/**/*.css").on('change', reload);
  gulp.watch("sass/**/*.scss", ['sass', reload]);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function () {
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'dist'
  });
});
