//引入模块
var gulp =require("gulp");
var webserver = require("gulp-webserver");
//启动一个任务
gulp.task("webserver",function(){
    gulp.src('./')
    .pipe(webserver({
        host:"localhost",
        port:8080,
        livereload:true,
        open:true,
        directoreListing:true,
        fallback:"index.html"
    }));
})

$http({
    url:"http://localhost:8080",
    success:function(data){
        console.log(data)
    }
})

gulp.task("default",["webserver"])
