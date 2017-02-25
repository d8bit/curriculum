
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    minify = require('gulp-minify'),
    purify = require('gulp-purifycss'),
    sourcemap = require('gulp-sourcemaps');

gulp.task('all', [
    'move-files',
    'purify-css',
    'minify-css',
    'minify-html',
    'minify-js'
]);

gulp.task('default', ['watch']);


gulp.task('move-files', function(){
    // copy vendor folder
    gulp.src(['src/vendor/**/*']).pipe(gulp.dest('dist/vendor'));
    // copy img folder
    gulp.src(['src/img/**/*']).pipe(gulp.dest('dist/img'));
    // copy fonts folder
    gulp.src(['src/fonts/**/*']).pipe(gulp.dest('dist/fonts'));
    // copy other files
    gulp.src(['src/.htacces', 'src/robots.txt', 'src/sitemap.xml']).pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', function() {
    return gulp.src('src/**/*.css')
        .pipe(sourcemap.init())
            .pipe(purify(['src/vendor/**/*.js', 'src/js/*.js', 'src/*.html']))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(concat('style.min.css'))
        .pipe(sourcemap.write('maps'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('purify-css', function() {
    return gulp.src('dist/css/*.css')
        .pipe(purify(['src/js/*.js', 'src/*.html']))
        .pipe(gulp.dest('dist/css'));

});

gulp.task('minify-html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));

});

gulp.task('minify-js', function() {
    gulp.src('src/js/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/js'));

});

gulp.task('livereload', function() {
    livereload.reload();
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(
        ['src/css/*.css', 'src/*.html', 'src/js/*.js'],
        ['all', 'livereload']
    );
});
