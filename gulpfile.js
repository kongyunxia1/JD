const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber")

// const jsonserver = require("json-server");

gulp.task("html", done => {
    gulp.src("html/*.html")
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload());
    done();
})
gulp.task("iconfont", done => {
    gulp.src("iconfont/*")
        .pipe(gulp.dest("dist/iconfont"))
        .pipe(connect.reload());
    done();
})
gulp.task("css", done => {
    gulp.src("css/*.css")
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
})
gulp.task("img", done => {
    gulp.src("img/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());
    done();
})

gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
})

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(gulp.dest("css/"))
        .pipe(connect.reload());
    done();
})

gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    });
    done();
})

gulp.task("watch", done => {
    gulp.watch("html/*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("css/*.css", gulp.series("css"));
    gulp.watch("img/*", gulp.series("img"));
    gulp.watch("js/*.js", gulp.series("js"));
    gulp.watch("iconfont/*", gulp.series("iconfont"));
    done();
})

gulp.task("build", gulp.parallel("html", "img", "sass", "css", "js", "iconfont"));
gulp.task("default", gulp.series("build", "watch", "server"));