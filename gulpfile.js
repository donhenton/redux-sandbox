/**
 * 
 * @type Module gulp|Module gulp
 * 
 * 
 * will contingently minify js, no flag leaves js assembled.
 * 
 */


var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglifycss = require('gulp-uglifycss');
var del = require('del');
var reactify = require('reactify');
var babelify = require('babelify');
var browserify = require('browserify');
var watch = require('gulp-watch');
var tap = require('gulp-tap');
var gutil = require('gulp-util');
var server = require('gulp-server-livereload');
var livereload = require('gulp-livereload');
var gulpsync = require('gulp-sync')(gulp);
var gulpif = require("gulp-if");
var argv = require('yargs').argv;
var rename = require("gulp-rename");
var envify = require('envify');
var fs = require('fs')

var notify = require("./build_utils/build_utils").notify;
var targetLocation = './public_html/';
 

/* livereload loads this page you only get one  
 * 
 * the chrome livereload plugin needs to be installed
 * 
 */
var pageURL = 'http://localhost:8080';

var SASS_MAIN_FILE = './src/sass/style.scss';
var SASS_FILES = './src/sass/**/*.scss';
var WATCH_JS = ['./src/react/**/*.js'];
var MAIN_HTML_FILE = ['./public_html/index.html'];

function Bundle() {

    var envType = 'development';
    var debugType = true;
    
    
    var Bundler = browserify({
        entries: './src/react/app.js',
        transform: [["babelify", {"presets": ["es2015","react"]}],["envify",{NODE_ENV: envType,'global': true, '_': 'purge', }]],
        extensions: ['.js'],
        debug: debugType,
        cache: {},
        packageCache: {},
        fullPaths: true
    });  
    return Bundler
            .bundle()
            .on('error', notify);
}
 

gulp.task('build', function () {
    Bundle()
            .pipe(source('js/bundle.js'))
            .pipe(gulp.dest(targetLocation))
            .on('finish', function ( ) {
                gutil.log("build bundle end");
                 livereload.reload(pageURL);
            });
    ;
});
var sassProcess =
        function () {

            return gulp.src(SASS_MAIN_FILE)
                    .pipe(sass().on('error', sass.logError))
                    .pipe(concat('css/styles.css'))
                  //  .pipe(uglifycss())
                    .pipe(gulp.dest(targetLocation));
        };

gulp.task('sass', function () {
    sassProcess();

});

 

gulp.task('watch', function () {

    watch(SASS_FILES, function (events, done) {

        sassProcess()
                .on('finish', function ( ) {
                    gutil.log("processing change in css");
                    livereload.reload(pageURL);
                });

    });

    watch(WATCH_JS, function (events, done) {

        gulp.start('build');
    });

    watch(MAIN_HTML_FILE, function (events, done) {
        gutil.log("starting html change");
        livereload.reload(pageURL);
    });

});

gulp.task('serve', function (done) {
    livereload.listen();
    gulp.src('public_html')
            .pipe(server({
                livereload: {
                    enable: true
                },
                host: '127.0.0.1',
                port: 8080,
                defaultFile: 'index.html',
                directoryListing: false,
                open: true
            }));
});
 
gulp.task('default', gulpsync.sync(['build', 'sass',  'watch', 'serve']));