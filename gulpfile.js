var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch'),
	pkg = require('./package.json');

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            sourceMap: true
        }))
        .on('error', function(err) {
            gutil.log(gutil.colors.red(err));
            gutil.beep();
            this.emit('end');
        })
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(pkg.css));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
    //gulp.watch('js/**/*.js', ['js']);
});

gulp.task('default', ['watch']);