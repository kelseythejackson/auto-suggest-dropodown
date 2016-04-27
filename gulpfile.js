(function () {
    'use strict';
    
    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        jade = require('gulp-jade');
    
    gulp.task('sass', function () {
        return gulp.src('scss/app.scss')
            .pipe(sass())
            .pipe(gulp.dest('css/'));
        
    });
    
    gulp.task('jade', function () {
        return gulp.src('jade/index.jade')
            .pipe(jade())
            .pipe(gulp.dest('.'));
        
    });
    
    gulp.task('watchFiles', function () {
        gulp.watch('jade/**/*.jade', ['jade']);
        gulp.watch('scss/**/*.scss', ['sass']);
    });
    
    gulp.task('serve', ['watchFiles']);
}());