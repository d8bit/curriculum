var gulp = require('gulp'),
    fs = require('fs');

gulp.task('clean-html', function(done) {
    try { fs.unlinkSync('dist/index.html'); } catch (e) {}
    done();
});

gulp.task('move-files', function() {
    return new Promise(function(resolve) {
        gulp.src(['src/img/**/*']).pipe(gulp.dest('dist/img'));
        gulp.src(['src/robots.txt', 'src/sitemap.xml']).pipe(gulp.dest('dist/'));
        resolve();
    });
});

gulp.task('copy-html', function() {
    return gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return new Promise(function(resolve) {
        gulp.watch(['src/*.html'], gulp.series('all'));
        resolve();
    });
});

gulp.task('default', gulp.series('watch'));

gulp.task('all', gulp.series('clean-html', 'move-files', 'copy-html'));
