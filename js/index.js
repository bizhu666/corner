$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$("#return").fadeIn();			
		}else{
			$("#return").fadeOut();
		}
	});
	
	$("#return").click(function(){
		$("html,body").animate({"scrollTop":"0px"
		},2000)
	});
	
	$(".mask").hover(function(){
		$(this).find(".zhezhao").show().siblings().hide();
	},function(){
		$(this).find(".zhezhao").hide().siblings().show();
	});	
	
})