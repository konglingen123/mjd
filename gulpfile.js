const gulp = require("gulp");
//html
gulp.task("copy-html",function(){
	return gulp.src("./*.html")
	.pipe(gulp.dest("dist/"))
	.pipe(connect.reload());
})
/*
 gulp.task() 创建任务的
    gulp.src()  找文件源路径
    pipe() 管道
    gulp.dest() 目的路径
*/
gulp.task("images",function(){
	return gulp.src("img/*.{jpg,png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})
// 
gulp.task("data",function(){
	return gulp.src(["json/*.json","!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})
gulp.task("scripts", function(){
    return gulp.src(["js/*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
const scss = require("gulp-sass")
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("scss1",function(){
	return gulp.src("css/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss2", function(){
    return gulp.src("css/denlu.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("css.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss3", function(){
    return gulp.src("css/public.scss")
    .pipe(scss())
    .pipe(gulp.dest("./dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("css.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss4", function(){
    return gulp.src("css/register.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("css.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss5", function(){
    return gulp.src("css/detail.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("css.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

//将上面所有的任务执行一遍，在监听之前，将所有的任务，先去执行一遍
gulp.task("build", ["copy-html", 'images', "scripts", "data", "scss1", "scss2", "scss3", "scss4","scss5"], function(){
    console.log("项目建立成功");
})

//设置监听，设置服务，同时启动监听和服务
gulp.task("watch", function(){
    gulp.watch("./*.html", ['copy-html']);
    gulp.watch("img/*.{jpg,png}", ['images']);
    gulp.watch(["json/.json", "!package.json"], ['data']);
    gulp.watch(["js/*.js", "!gulpfile.js"], ['scripts']);
    gulp.watch("css/index.scss", ['scss1']);
    gulp.watch("css/denlu.scss", ['scss2']);
	gulp.watch("css/public.scss", ['scss3']);
	gulp.watch("css/register.scss", ['scss4']);
	gulp.watch("css/detail.scss", ['scss5']);
})

const connect = require("gulp-connect");
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: 8888,
        livereload: true
    })
})

//设置默认任务
gulp.task("default", ["watch", 'server']);

