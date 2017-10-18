var gulp = require('gulp'),
  less = require('gulp-less'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create(),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  reload = browserSync.reload;

gulp.task('less', function() {
  gulp
    .src('src/*.less')
    .pipe(less())
    .pipe(minifycss())
    .pipe(gulp.dest('public/css'))
    .pipe(reload({ stream: true }));
});
gulp.task('browser-sync', ['less'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/*.less', ['less']);
  gulp.watch('*.html').on('change', reload);
});
gulp.task('default', ['browser-sync'], function() {
  console.log('Mission Complete');
});
