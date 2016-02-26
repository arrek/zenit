var gulp = require('gulp');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
gulp.task('styles', function() {
    gulp.src('app/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles/'));
});
gulp.task('check', function() {
    gulp.src('style/*.scss')
        .pipe(scsslint());
        
});
gulp.task('default',function() {
    gulp.watch('style/*.scss',['styles']);
    gulp.watch('style/*.scss',['check'])
});