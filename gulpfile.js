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
    css: ['dev/css/**/*.css'],
    html: ['dev/**/*.html'],
    sass: ['./scss/**/*.scss']
};


gulp.task('cleanall', function() {
    return gulp.src('www/app/', {
            read: false
        })
        .pipe(clean());
});


gulp.task('minifycss', function() {
    return gulp.src(paths.css).pipe(allminify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        getKeptComment: function(content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//img);
            return m && m.join('\n') + '\n' || '';
        }
    })).pipe(gulp.dest('www/css/'))
});

gulp.task('minifyhtml', function() {
    return gulp.src(paths.html).pipe(allminify({
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
        // .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
        .pipe(jsminify())
        // .pipe(ngAnnotate())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('www/app/'));
});

gulp.task('templateCache', function() {
    return gulp.src('dev/views/**/*.html')
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(gulp.dest('www/public/'));
});


gulp.task('watch', function() {
    gulp.watch(paths.css, ['minifycss']);
    gulp.watch(paths.coffee, ['coffee']);
    gulp.watch(paths.html, ['minifyhtml', 'templateCache']);
});

// gulp.task('build', ['coffee', 'minifycss', 'minifyhtml']);
