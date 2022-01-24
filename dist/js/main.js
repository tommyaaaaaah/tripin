$(function(){
	$(".background").css({"min-height":"100%"});
	
	$('nav#menu').mmenu();
});

//desk menu
$(function() {
	// 當滑鼠移到 .menu li 上時
	$('nav li').hover(function() {
		// 顯示第一個 ul 子元素
		$(this).children('ul.level').stop(true,false).css({
			visibility: 'visible'
		}).fadeIn(600);
	}, function() {
		// 隱藏第一個 ul 子元素
		$(this).children('ul.level').hide();
	});
});

//會員鈕
// $(function(){
// 	$("header > .member > a.member").click(function () {
// 		$('header > .member > span.member-box').toggle('slide', {direction:'left'} , 500);
// 	});
// });
$(function(){
	$("header > .member > a.member").click(function() {
		$("header > .member > span.member-box").toggle().toggleClass("open");
	});
});

//gotop
$(function(){
	$(".gotop").click(function(){

		$("html,body").animate({scrollTop:0},1000);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});
});

//廣告輪播
$(function(){
	$('#liquid').liquidcarousel({height:126, duration:500, hidearrows:false});
});

//clause.php 點進判別哪個tab開啟
$(function(){
	// console.log(location.hash)
	// 	$(".tab_content").hide();
	// 	if (!location.hash == '') {
	// 		$(location.hash).find('.tab_content').css('display','block');
	// 		// $(location.hash).find('.qa_list').addClass('show');
	// };

	// 預設顯示第一個 Tab
	var _showTab = 0;
	var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});
});

//會員登入動態
$(function(){
	$('.member').on('click',function(){
		var memberbox = $('.member-box');
		//parent抓取自己的父元素
		if(! memberbox.hasClass('open')){
			//尋找member帶有"member-box"的父元素給他open
			$(this).parent(memberbox).addClass('open');
			//尋找member帶有"member-box"的父元素移除open
		}else {
			$(this).parent(memberbox).removeClass('open');
		}
	});
});

