const gulp = require('gulp'),
      sass = require('gulp-sass');

const sassFiles = './sass/styles.scss';
const cssDest   = './';

gulp.task('sass', function () {
    return gulp.src(sassFiles)
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest(cssDest))
});

gulp.task('watch',function () {
    gulp.watch(sassFiles, gulp.series('sass'));
});
