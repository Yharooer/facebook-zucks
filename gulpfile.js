const gulp = require('gulp');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const sourcemaps = require("gulp-sourcemaps");

gulp.task('default', () => 
    browserify({
        basedir: '.',
        paths: ['src'],
        debug: true,
        entries: ['src/main.js'],
        cache: {},
        packageCache: {}
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./bin'))
);