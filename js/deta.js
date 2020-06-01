console.log("加载成功");
//main.js中完成当前.html页面中所有js模块的管理工作

/*
    有可能有一些模块的路径比较复杂，提前设置路径
*/
require.config({
    paths: {
        //自定义的模块名字: 模块的路径
		"details": "details",
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie"
    },
	shim: {
	    //设置依赖关系  先引入jquery以后，再去加载jquery-cookie
	    "jquery-cookie": ["jquery"],
	}
})



//引入模块，使用模块中的方法
//前后模块，和后面的参数，顺序一定要一一对应。
require(["details"], function(details,$){
    //add 是前面引入模块返回的对象
	details.details()
})