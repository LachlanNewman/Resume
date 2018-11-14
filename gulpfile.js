const gulp  = require('gulp'),
      sass  = require('gulp-sass');

const sassSrc     = './sass/styles.scss';
const sassGlob    = './sass/**/*.scss';
const cssDest     = './';

gulp.task('sass', function () {
      return gulp.src(sassSrc)
            .pipe(sass()) // Converts Sass to CSS with gulp-sass
            .pipe(gulp.dest(cssDest))
});

gulp.task('watch', function () {
      gulp.watch(sassGlob, gulp.series('sass'));
});
