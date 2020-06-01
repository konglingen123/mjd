
define(["jquery"],function($){
	function shoplist() {
		var  shop = $('.shop-daohan-div')
		$.get("../data/shop.json", function(body, statusText, xhr){
			if(statusText == "success"){
				if(xhr.status == "200"){
					console.log(body)
					var arr = body
					var str = ``
					for(var i = 0; i < arr.length; i ++){
						str += `
							<a href= "${arr[i].href}.html">
								<img src="${arr[i].img}" alt="">
								<p class="ipone">
									<i>${arr[i].i}</i>
									<span>${arr[i].title}</span>
								</p>
								<p class="iptwo">
									<span><i>￥</i><i>${arr[i].price}</i><i>${arr[i].decimal}</i></span>
									<span>${arr[i].huodong}</span>
								</p>
							</a>` 
					}
					shop.html(str)
				}
			}
		})
	}
	// function clic() {
	// 	console.log(123)
	// 	//  获取按钮  给按钮加事件   当点击某一个按钮   修改对应的按钮样式   和下面div  对应的display的属性值  ,同时将
		
	// }
	return {
		shoplist:shoplist,
		// shoplist:clic
	}
})