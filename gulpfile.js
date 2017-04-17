/**
 * Created by Ashish Goyal on 4/5/2017.
 */

var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpUglify = require('gulp-uglify');
var gulpRename = require('gulp-rename');


/*gulp.task("Ashish",function () {
   console.log('Ashish Your Task Is Running');
});*/


gulp.task("concatScripts",function () {
    gulp.src(
        [
            "Public_html/JS/jquery.min.js",
            "Public_html/JS/bootstrap.min.js",
            "Public_html/JS/mdb.min.js",
            "Public_html/JS/Slider_Script.js",
            "Public_html/JS/Fading.js",
            "Public_html/JS/Animation.js",
            "Public_html/JS/Script.js"
        ]
    )
        .pipe(gulpConcat('app.js'))
        .pipe(gulp.dest('Public_html/JS'))
});

gulp.task("minifyScripts",function () {
    gulp.src('Public_html/JS/app.js')
        .pipe(gulpUglify())
        .pipe(gulpRename('app.min.js'))
        .pipe(gulp.dest('Public_html/JS'))
});

gulp.task("watchcss",function () {
    gulp.watch('Public_html/CSS/*.css')
});

gulp.task("default"/*,["Ashish"]*/,function () {
    console.log('Default Is Running Now');
});