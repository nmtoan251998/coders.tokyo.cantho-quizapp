const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./public/sass/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('main.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/dist/css'))
});

gulp.task('watch', function () {
    gulp.watch("./public/sass/**/*.scss", gulp.parallel('sass'));
})