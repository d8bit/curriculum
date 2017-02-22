
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    minify = require('gulp-minify');

gulp.task('default', function() {
    livereload.reload();
});

gulp.task('minify-css', function() {
    return gulp.src('src/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));

});

gulp.task('compress', function() {
    gulp.src('src/**/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('dist'))

});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['src/css/*.css', 'src/*.html', 'src/js/*.js'], ['default', 'minify-html', 'minify-css', 'compress']);
});
