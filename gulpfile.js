const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const sourcemaps = require("gulp-sourcemaps");
const watchify = require('watchify');

gulp.task('default', () => 
    browserify({
        basedir: '.',
        paths: ['src'],
        debug: true,
        entries: ['src/main.js'],
        cache: {},
        packageCache: {}
    })
    .transform(babelify,
        {
            presets: [require('@babel/preset-es2015')]
        })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./bin'))
);