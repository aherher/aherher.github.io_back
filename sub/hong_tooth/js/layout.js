$(document).ready(function(e) {
	//��� ��ũ�ѽ�
	$(window).scroll(function (){						
	     var bott = $(".bott_info").offset().top -= 750;		
		if ($("html, body").scrollTop() > bott) { 
		 $(".bott_info .center_box > div").addClass("onE"); 		
		}
		
		});
	
	$(".main_depth li").addClass("onevt");
	
	//�޴� ����
	$(".menu > li").hover(function (){		
		$(this).find(".gsub:not(:animated)").slideDown(100);
		},function (){
			$(".gsub").slideUp(100);			
			});
	
//���� �̹��� �Ѹ�
	$(".main_slide li").first().show();
	var i = 0;	
	var ims = $(".main_slide li").length -1; // �� ����
	
	//�⺻ �Ѹ� ���
	function rolling (){
		$(".main_slide li").fadeOut(1000);
		$(".main_slide li").eq(i).fadeIn(1000);	
		$(".dot_wrap li").removeClass("dot_on");
		$(".dot_wrap li").eq(i).addClass("dot_on");
		};
		
	//�̹��� �� ���� �� ��Ʈ. ����.	
	function fade() {
		if (i < ims){i++;}
		else if (i >= ims){i = 0;};
		rolling ();
		};			
	
	
	//���� ��Ʈ Ŭ�� ��
	$(".dot_wrap li").click(function (){
		var d = $(this).index(".dot_wrap li");
		i = d;			
		rolling ();		
		});	
	
	//�߿�. ó�� ������ �ε� �� �� ���͹� �۵�. ���͹� ���� ����. ��, ���̵� �Ǵ� �����ִ� �ð� - �ٲ�� �ð�(1��)	
	var thefades = setTimeout(function (){
		fade();
		thefades2 = setInterval (fade,6000);
		}, 5000);
		
	//��Ʈ�� ���콺 ���� �� �ڵ� ���� ���	
	$(".dot_wrap").hover(
	function (){
		clearTimeout(thefades);
		clearInterval(thefades2);
		},
	function (){
		thefades = setTimeout(function (){
		fade();
		thefades2 = setInterval (fade,6000);
		}, 5000);	
	});	
	
	//�޴��κ� �����̵�
  var msle = $(".mcent_slide");
  var msle_li = $(".mcent_slide > li");
  var tmsq = $(msle_li).length;
  var mslewd = $(msle_li).width();
  $(msle).css("width", tmsq * 280);
  $(msle).css("margin-left", -280);
  $(msle_li).last().prependTo(msle);
  var msa = 0;
  
  //��Ŭ��
  $(".mslide_wrap .ms_right").click(function (){
	    $(".mcent_slide:not(:animated)").animate({marginLeft:parseInt($(msle).css("margin-left"))-280}, 300, function (){
		$(".mcent_slide > li").first().appendTo(msle);
		$(msle).css("margin-left", -280);			
		});
		msa++;		 
		if (msa < theeq){			
			} else if (msa >= tmsq -1){ 
				msa = 0;				
				}
	  });
	  
  //��Ŭ��  
  $(".mslide_wrap .ms_left").click(function (){
	 $(".mcent_slide:not(:animated)").animate({marginLeft:parseInt($(msle).css("margin-left"))+280}, 300, function (){
		$(".mcent_slide > li").last().prependTo(msle);
		$(".mcent_slide").css("margin-left", -280);	
		});
		if (msa > 0){
			msa -= 1;			
			} else if (msa == 0){
				msa = tmsq -1;				
					};
	  });	  
	  
	  $(".move_pic").animate({top:0}, 600);
	  
	  //īī�� Ŭ��
	  $(".kakao").click(function (){
		  if($(".kakao_id").css("display") == "none"){
		     $(".kakao_id").show().animate({width:566+"px"},300);
		  } else if($(".kakao_id").css("display") == "block") {
			 $(".kakao_id").animate({width:0+"px"},300,function (){
				 $(".kakao_id").hide();
				 });
			  
			  }
		  
		  return false;
		  });
	
	
});