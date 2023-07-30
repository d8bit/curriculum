
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    minify = require('gulp-minify'),
    purify = require('gulp-purifycss'),
    sourcemap = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('move-files', function(){
    return new Promise(function(resolve, reject) {
        // copy vendor folder
        gulp.src(['src/vendor/**/*']).pipe(gulp.dest('dist/vendor'));
        // copy img folder
        gulp.src(['src/img/**/*']).pipe(gulp.dest('dist/img'));
        // copy fonts folder
        gulp.src(['src/fonts/**/*']).pipe(gulp.dest('dist/fonts'));
        // copy other files
        gulp.src(['src/index.html', 'src/.htaccess', 'src/robots.txt', 'src/sitemap.xml']).pipe(gulp.dest('dist/'));
        resolve();
    })
});

gulp.task('minify-css', function() {
    return new Promise(function(resolve, reject) {
        gulp.src('src/**/*.css')
            .pipe(sourcemap.init())
            .pipe(purify(['src/vendor/**/*.js', 'src/js/*.js', 'src/*.html']))
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(autoprefixer())
            .pipe(concat('style.min.css'))
            .pipe(sourcemap.write('maps'))
            .pipe(gulp.dest('dist/css'));
        resolve();
    });
});

gulp.task('purify-css', function () {
    return new Promise(function (resolve, reject) {
        gulp.src('dist/css/*.css')
            .pipe(purify(['src/js/*.js', 'src/*.html']))
            .pipe(gulp.dest('dist/css'));
        resolve();
    });

});

// gulp.task('minify-html', function() {
//     return gulp.src('src/*.html')
//         .pipe(htmlmin({collapseWhitespace: true}))
//         .pipe(gulp.dest('dist'));

// });

gulp.task('minify-html', function () {
    return new Promise(function (resolve, reject) {
        gulp.src('src/*.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('dist'));
        resolve();
    });
});

gulp.task('minify-js', function () {
    return new Promise(function (resolve, reject) {
        gulp.src('src/js/*.js')
            .pipe(minify({
                ext: {
                    src: '-debug.js',
                    min: '.js'
                },
                exclude: ['tasks'],
                ignoreFiles: ['.combo.js', '-min.js']
            }))
            .pipe(gulp.dest('dist/js'));
        resolve();
    });
});

gulp.task('livereload', function() {
    livereload.reload();
});

gulp.task('watch', function() {
    gulp.watch(
        ['src/css/*.css', 'src/*.html', 'src/js/*.js'],
        ['all', 'livereload']
    );
    livereload.listen();
});

gulp.task('default', gulp.series('watch'));

gulp.task('all', gulp.series(
    'move-files',
    'purify-css',
    'minify-css',
    'minify-html',
    'minify-js'
));

// gulp.task('all', function () {
//     return new Promise(function (resolve, reject) {
//         gulp.series(
//             'move-files',
//             'purify-css',
//             'minify-css',
//             'minify-html',
//             'minify-js'
//         )
//         resolve();
//     });
// });