console.log("加载成功");
//main.js中完成当前.html页面中所有js模块的管理工作

/*
    有可能有一些模块的路径比较复杂，提前设置路径
*/
require.config({
    paths: {
        //自定义的模块名字: 模块的路径
        "banner": "banner",
		"shoplist": "shoplist",
		"headernav":"headernav",
		"side" : "side",
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
require(["headernav","banner","side","shoplist","jquery","jquery-cookie"], function(headernav,banner,side,shoplist,$){
    //add 是前面引入模块返回的对象
	// 顶部
	// 检查是否有cookie
	// var phone = 
	if(document.cookie){
		//  存在
		var [,phone] = location.search.split('=')
		$(".none").css({
			display:"inline-block",
		})
		$('#none').html(`您好，<span>${phone}</span>`)
		$(".bloc").css({display:"none"})
	}
	$("#denglunone #tuichu").click(function(){
		$.cookie('phone',none)
		$("#denglunone").css({
			display:"none"
		})
		$("#denglublock").css({
			display:"block"
		})
	})
	$('#tuichu').click(function(){
		var [,phone] = location.search.split('=')
		$.cookie(phone,null) //问题
		console.log(phone)
		$('.none').css({display:"none"})
		$('.bloc').css({display:"inline-block"})
	})
  banner.banner();
  side.side();
  shoplist.shoplist();
  headernav.headernav()
})