/**
 * Created by Ashish Goyal on 4/5/2017.
 */
const gulp = require('gulp');
const size = require('gulp-size');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoFixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const liveReload = require('gulp-livereload');
const pump = require('pump');
const imageMin = require('gulp-imagemin');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const STYLES_PATH = ['./css_/bootstrap.min.css','./css_/mdb.min.css','./css_/MainPage.css','./css_/aos.css'];
const SCRIPTS_PATH = './js_/**/*.js';
const IMAGES_PATH = './images/**/*.{png,jpeg,jpg,gif}';

gulp.task('styles',function () {
    console.log('styles task has been running!!');
    return gulp.src(STYLES_PATH)
        .pipe(size())
        .pipe(sourceMaps.init())
        .pipe(autoFixer())
        .pipe(plumber())
        .pipe(concat('all.css'))
        .pipe(cleanCss())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(size())
        .pipe(liveReload())
});

gulp.task('scripts',function (cb) {
    console.log('scripts task has been running!!');
    pump([
         gulp.src(SCRIPTS_PATH),
         size(),
         concat('all.js'),
         uglify(),
         gulp.dest('./dist'),
         size(),
         liveReload()
    ],cb)
});

gulp.task('images',function () {
    console.log('images task has been running!!');
    gulp.src(IMAGES_PATH)
        .pipe(size())
        .pipe(imageMin({verbose : true}))
        .pipe(size())
        .pipe(gulp.dest('./dist/images'))
});

gulp.task('default', function () {
        console.log('default task has been running!!');
});


gulp.task('watch',function () {
    console.log('watcher has been started!!');
    require('./server');
    liveReload.listen();
    gulp.watch([SCRIPTS_PATH,STYLES_PATH,IMAGES_PATH],['scripts','styles','images'])
});
