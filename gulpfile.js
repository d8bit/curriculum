var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin');

gulp.task('move-files', function() {
    return new Promise(function(resolve) {
        gulp.src(['src/img/**/*']).pipe(gulp.dest('dist/img'));
        gulp.src(['src/robots.txt', 'src/sitemap.xml']).pipe(gulp.dest('dist/'));
        resolve();
    });
});

gulp.task('minify-html', function() {
    return new Promise(function(resolve) {
        gulp.src('src/*.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('dist'));
        resolve();
    });
});

gulp.task('watch', function() {
    return new Promise(function(resolve) {
        gulp.watch(['src/*.html'], gulp.series('all'));
        resolve();
    });
});

gulp.task('default', gulp.series('watch'));

gulp.task('all', gulp.series('move-files', 'minify-html'));
