//   实现轮播功能
define(["jquery"],function($){
	function banner(){
		var oBtns = $('#banner-li')
		var lis = document.querySelectorAll('#banner-li li')
		var spans =document.querySelectorAll('#banner-li li span')
		var imgs = document.querySelectorAll('#bannerone22 a img')
		var next = document.querySelector('#banner-next')
		var prev = document.querySelector('#banner-prev')
		
		var timer = null
		
		// 重新计算ul的宽
		// 轮播 首先  点击方块按钮实现图片切换
		$(function(){
			var lastIndex = 0, index = 0
			var arrlis = Array.from(lis)
			var arrspans = Array.from(spans)
			arrlis.forEach((li,i)=>{
				$(li).click(function(){
					lastIndex = index
					index = i
					remove_add_attr(index,lastIndex)
				})
			})
			// 点击右按钮
			$(next).click(function(){
				lastIndex = index
				index ++
				if(index == arrlis.length){
					index = 0
				}
				 remove_add_attr(index,lastIndex)
			})
			$(prev).click(function(){
				lastIndex = index
				index --
				if(index == -1){
					index = arrlis.length -1
				}
				 remove_add_attr(index,lastIndex)
			})
			$('#bannerone22').mouseenter(function(){
				clearInterval(timer)
			})
			$('#bannerone22').mouseleave(function(){
				timer = setInterval(function(){
					lastIndex = index
					index ++
					if(index == arrlis.length){
						index = 0
					}
					 remove_add_attr(index,lastIndex)
				},3000)
			})
			// 自动轮播
			
			timer = setInterval(function(){
				lastIndex = index
				index ++
				if(index == arrlis.length){
					index = 0
				}
				 remove_add_attr(index,lastIndex)
			},3000)
			function remove_add_attr(index,lastIndex){
				arrlis[lastIndex].classList.remove('ali')
				arrspans[lastIndex].classList.remove('aspan') 
				arrlis[index].className = "ali"
				arrspans[index].className = 'aspan'
				imgs[lastIndex].classList.remove('opacit')
				imgs[index].className = 'opacit'
			}
		})
	}
	return {
		banner:banner
	}
})