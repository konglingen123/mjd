require.config({
    paths: {
        //自定义的模块名字: 模块的路径
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
require(["jquery","jquery-cookie"], function($){
    //add 是前面引入模块返回的对象
	// 顶部
	$('#zhuce_r').click(function(){
		location.href = "./register.html"
	})
	$('#three').click(function(){
		var phone = $('#oInput input').val()
		var pwd = $('#opwd input').val()
		$.post('./api/register.php',{
			phone
		},function(res){
			if(JSON.parse(res).code != '0'){
				alert('您好,该手机还未注册请先注册')
			}else{
				$.post("./api/login.php",{phone,pwd},function(res){
					if(JSON.parse(res).code == '1'){
						$.cookie(phone,phone,{
							path:'/',
							raw:false
						})
						alert('您好,登陆成功,即将跳转首页')
						location.href = "./index.html?name=" + phone
					}
					console.log(res)
				})
				
			}
		})
	})
})