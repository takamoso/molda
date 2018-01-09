const gulp = require('gulp');
const scss = require('gulp-sass');

gulp.task('css', () => {
  gulp
    .src('test/test.scss')
    .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
    .pipe(gulp.dest('./test'));
});

gulp.task('watch', () => {
  gulp.watch(['test/test.scss'], ['css']);
});