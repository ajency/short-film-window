var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    allminify = require('gulp-minifier'),
    jsminify = require('gulp-minify'),
    coffee = require('gulp-coffee'),
    clean = require('gulp-clean'),
    ngAnnotate = require('gulp-ng-annotate'),
    templateCache = require('gulp-angular-templatecache'),
    bower = require('bower'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sh = require('shelljs');


var paths = {
    coffee: ['dev/source/**/*.coffee','dev/source/**/*/*.coffee',],
    css: ['dev/css/**/*.css','dev/lib/Swiper/dist/css/swiper.min.css',"dev/lib/ionic-threads/ionic.threads.css"],
    html: ['dev/**/*.html'],
    indexhtml: ['dev/index.html'],
    sass: ['./scss/**/*.scss'],
    less: ['dev/less/*.less'],
    vendorJS:[
    "dev/lib/underscore/underscore-min.js",
    "dev/lib/moment/moment.js",
    "dev/lib/Swiper/dist/js/swiper.min.js",
    "dev/lib/angular-snapscroll.js",
    "dev/lib/ngCordova/dist/ng-cordova.min.js",
    "dev/lib/angular-sanitize/angular-sanitize.min.js",
    "dev/lib/angular-animate/angular-animate.min.js",
    "dev/lib/ionic-image-lazy-load/ionic-image-lazy-load.js",
    "dev/lib/ion-sticky/ion-sticky.js",
    "dev/lib/imageCachefactory/ionic.ion.imagecachefactory.js",
    "dev/lib/localforage/dist/localforage.min.js",
    "dev/lib/firebase/firebase.js",
    "dev/lib/ng-cordova-oauth/dist/ng-cordova-oauth.min.js",
    "dev/lib/ionic-threads/ionic.threads.js"]
};


gulp.task('cleanall', function() {
    return gulp.src('www/app/', {
            read: false
        })
        .pipe(clean());
});

gulp.task('minifycss', function() {
    return gulp.src(paths.css)
    .pipe(allminify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        getKeptComment: function(content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    }))
    .pipe(concat('common.css'))
    .pipe(gulp.dest('www/css/'))
});

gulp.task('minifyhtml', function() {
    return gulp.src(paths.indexhtml).pipe(allminify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        getKeptComment: function(content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    })).pipe(gulp.dest('www/'))
});

gulp.task('coffee', function() {
    gulp.src(paths.coffee)
        .pipe(coffee({
            bare: true
        }).on('error', gutil.log))
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(jsminify())
        .pipe(gulp.dest('www/app/'));
});

gulp.task('templateCache', function() {
    return gulp.src('dev/views/**/*.html')
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(gulp.dest('www/views/'));
});

gulp.task('concatVendor', function() {
    return gulp.src(paths.vendorJS)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('www/lib/'));
});


gulp.task('watch', function() {
    gulp.watch(paths.css, ['all']);
    gulp.watch(paths.coffee, ['all']);
    gulp.watch(paths.html, ['all']);
    gulp.watch(paths.indexhtml, [ 'all']);
});

gulp.task("buildlib",['concatVendor']);

gulp.task("all",['concatVendor','coffee','minifyhtml','minifycss','templateCache']);
