//   实现轮播功能
define(["jquery"],function($){
	function move(){
		var lastIndex = 0; var index = 0; 
		let lis = document.querySelectorAll('.section-one ul li')
		let oBoxImg = $('.secbox img')  //
		let oBigImg = $('#big img')
		let imgs = document.querySelectorAll('.section-one ul li img')
		console.log(imgs[0].src)
		Array.from(lis).forEach(function(li,i){
			li.onmouseenter = function(){
				lastIndex = index 
				 index = i
				li.classList.add('ac')
				lis[lastIndex].classList.remove('ac')
				oBoxImg.src = imgs[index].src
				oBigImg.src = imgs[index].src
			}
		})
	}
	function details(){
		let  secbox = document.querySelector('.secbox')
		let  mark = document.querySelector('#mark')
		let  big = document.querySelector('#big')
		let oBigImg = big.querySelectorAll('img')[0]
		// 1.滑入的时候显示｛大图,小图｝
		$(secbox).mouseenter(function(){
			$(mark).add($(big)).css({display:"block"})
			// 2.移动的时候获取到鼠标坐标赋值给小图
		}).mouseleave(function(){
			$(mark).add($(big)).css({display:"none"})
		}).mousemove(function(e){
			var e = e || window.event
			var l = e.clientX - secbox.offsetLeft - mark.offsetWidth / 2
			var t = e.pageY  - document.documentElement.scrollTop -  secbox.offsetTop - mark.offsetHeight / 2
			window.onscroll = function(){
			 t = e.pageY  - document.documentElement.scrollTop -  secbox.offsetTop - mark.offsetHeight / 2	
			}
			if(l <= 0) {l = 0}
			if(t <= 0) {t = 0}
			if(l >= secbox.clientWidth - mark.offsetWidth) {l= secbox.clientWidth - mark.offsetWidth}
			if(t >= secbox.clientHeight - mark.offsetHeight){t = secbox.clientHeight - mark.offsetHeight} 
			
			mark.style.left = l + 'px'
			mark.style.top = t + 'px'
			oBigImg.style.left = -2 * l + 'px';
			oBigImg.style.top = -2 * t + 'px';
		})
		
		
		// 3. 设置小图的坐标到中心  4.  限制设置小图的
		// 5. 将小图的坐标联动到大图的坐标

	// let 
	}
	
	
	return {
		details:details,
		move:move
		
	}
})