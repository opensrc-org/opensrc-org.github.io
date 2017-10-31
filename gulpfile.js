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
            "Public_html/JS/jquery.min.js_",
            "Public_html/JS/bootstrap.min.js_",
            "Public_html/JS/mdb.min.js_",
            "Public_html/JS/Slider_Script.js_",
            "Public_html/JS/Fading.js_",
            "Public_html/JS/Animation.js_",
            "Public_html/JS/Script.js_"
        ]
    )
        .pipe(gulpConcat('app.js_'))
        .pipe(gulp.dest('Public_html/JS'))
});

gulp.task("minifyScripts",function () {
    gulp.src('Public_html/JS/app.js_')
        .pipe(gulpUglify())
        .pipe(gulpRename('app.min.js_'))
        .pipe(gulp.dest('Public_html/JS'))
});

gulp.task("watchcss",function () {
    gulp.watch('Public_html/CSS/*.css')
});

gulp.task("default"/*,["Ashish"]*/,function () {
    console.log('Default Is Running Now');
});