const gulp = require('gulp');
const scss = require('gulp-sass');

gulp.task('css', () => {
  gulp
    .src('test/test.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
  gulp.watch(['test/test.scss'], ['css']);
});