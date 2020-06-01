define(["jquery"],function($){
	function side(){
		// 获取标签组  获取div  组
		// 鼠标移入的时候显示当前按钮以及对应的div的class样式
		// 当移出的时候, 隐藏当前的按钮,
		var lis = $('#bannerone11 li')
		var oDivs = $('#side div')
		// console.log(lis)
		$(function(){
			Array.from(lis).forEach(function(li,index){
				$(li).mouseenter(function(){
					// 改变当前样式和对应的选项卡样式的class
					$(this).addClass('hover')
					$(Array.from(oDivs)[index]).addClass('side-class')
					
					$(Array.from(oDivs)[index]).mouseenter(()=>{
						$(this).addClass('hover')
						$(Array.from(oDivs)[index]).addClass('side-class')
					}).mouseleave(() =>{
					$(this).removeClass('hover')
					$(Array.from(oDivs)[index]).removeClass('side-class')
				})
				})
				.mouseleave(function(){
					$(this).removeClass('hover')
					$(Array.from(oDivs)[index]).removeClass('side-class')
				})
			})
		})
	}
	return {
		side:side
	}
})