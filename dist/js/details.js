//   实现轮播功能
define(["jquery"],function($){
	function details(){
		let  secbox = document.querySelector('.secbox')
		let  mark = document.querySelector('#mark')
		let  big = document.querySelector('#big')
		// 1.滑入的时候显示｛大图,小图｝
		$(secbox).mouseenter(function(){
			$(mark).add($(big)).css({display:"block"})
			// 2.移动的时候获取到鼠标坐标赋值给小图
			$(secbox).mousemove(function(e){
				var e = e || window.event
				var l = e.clientX - secbox.offsetLeft - mark.offsetWidth / 2 + 'px'
				var t = e.clientY - secbox.offsetTop - mark.offsetHeight / 2  + 'px'
				mark.style.left = l
				mark.style.top = t
			})
		})
		$(secbox).mouseleave(function(){
			$(mark).add($(big)).css({display:"none"})
		})
		
		
		// 3. 设置小图的坐标到中心  4.  限制设置小图的
		// 5. 将小图的坐标联动到大图的坐标

	// let 
	}
	return {
		details:details
	}
})