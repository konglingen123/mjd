console.log("加载成功");
//main.js中完成当前.html页面中所有js模块的管理工作

/*
    有可能有一些模块的路径比较复杂，提前设置路径
*/
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
	$('.jingdongxieyi_2').click(function(){
		$('#jingdongxie').css({
			display: "none"
		})
	})
	var flag = false
	var oTxt = null
	var opwd = null
	$('#two').click(function(){
		// 先验证有无手机号码?     有则1.获取手机号码;
		//向后端发送请求,在数据库中查找此手机号码,如果找到,提醒,
		//   如果没找到,则在数据库中存储此手机号码,并且提醒
		 oTxt = $('#oInput input').val()
		 opwd = $('#opwd input').val()
		oTxt = oTxt.trim()
		opwd = opwd.trim()
		if(oTxt === "" || opwd === ""){
			alert('请您输入手机号码或者密码')
		}else{
			oTxt = Number(oTxt.trim())
			opwd =  Number(opwd.trim())
			$.post("api/register.php",{
				phone:oTxt
			},function(res){
				if(res.code == '0'){
					alert('您好,该手机号码已经注册,请更换其他手机号码或者直接登陆')
				}else{
					alert("您好,请继续下一步")
					flag = true
				}
			})
		}
	})
	$("#three").click(function(){
		if(flag){
			// 执行插入数据的操作
			$.post("./api/kregister.php",{
				phone:oTxt,
				pwd:opwd
			},function(res){
				console.log(JSON.parse(res))
				if(JSON.parse(res).code == '1'){
					alert('您好,已经注册,即将跳转登陆页面')
					location.replace('./login.html')
				}
			})
		}else{alert("您好,请您先点击上一个按钮进行验证")}
	})
})