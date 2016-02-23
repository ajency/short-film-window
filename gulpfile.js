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
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sh = require('shelljs');


var paths = {
    coffee: ['dev/source/**/*.coffee'],
    css: ['dev/css/**/*.css','dev/lib/Swiper/dist/css/swiper.min.css'],
    html: ['dev/**/*.html'],
    indexhtml: ['dev/index.html'],
    sass: ['./scss/**/*.scss'],

    vendorJS:["dev/lib/jquery/dist/jquery.min.js",
    "dev/lib/underscore/underscore-min.js",
    "dev/lib/Swiper/dist/js/swiper.js",
    "dev/lib/angular-snapscroll.js",
    "dev/lib/ngCordova/dist/ng-cordova.min.js",
    "dev/lib/angular-sanitize/angular-sanitize.min.js",
    "dev/lib/angular-animate/angular-animate.min.js",
    "dev/lib/Vimeo-jQuery-API-0.10.1/dist/jquery.vimeo.api.min.js",
    "dev/lib/Vimeo-jQuery-API-0.10.1/src/jquery.vimeo.api.js",
    "dev/lib/ionic-image-lazy-loader/ionic-image-lazy-load.js",
    "dev/lib/ion-sticky/ion-sticky.js",
    "dev/lib/imageCachefactory/ionic.ion.imagecachefactory.js",
    "dev/lib/angular-vimeo-embed/dist/angular-vimeo-embed.min.js",
    "dev/lib/localforage/dist/localforage.js",
    "dev/lib/parse-1.6.14.min.js",
    "dev/lib/moment/min/moment.min.js"]
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
    gulp.watch(paths.css, ['minifycss']);
    gulp.watch(paths.coffee, ['coffee']);
    gulp.watch(paths.html, [ 'templateCache']);
    gulp.watch(paths.indexhtml, [ 'minifyhtml']);
});

gulp.task("buildlib",['concatVendor']);
