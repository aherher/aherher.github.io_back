$(document).ready(function(e) {
	//�޴�
	$(".menu > li").mouseenter(function (){	
	   $(".gsub").hide();
       $(this).find(".gsub").show();
	   $(".gsub_bg").show();	   
		   });	
    $(".menu > li").mouseleave(function (){
		$(".gsub").hide();
		$(".gsub_bg").hide();
		});

    $(".header_wrap").hover(function (){
		$(this).addClass("on_head");		
		}, function (){
			$(this).removeClass("on_head");		
			});
			
	
	$(".slide_wrap").css("height", 	$(window).height());		
    $(window).resize(function (){
		$(".slide_wrap").css("height", 	$(window).height());		
		});
    
    //����
	$(".lang_wrap").hover(function (){
		$(".lang_sel").show();
		}, function (){
			$(".lang_sel").hide();
			});
	
	//���� �̹��� �Ѹ�
	$(".slide > li").first().show();
	$(".slide > li").first().addClass("current");	
	$(".dot_wrap > li").first().addClass("dot_on");
	var i = 0;	
	var ims = $(".slide > li").length -1; // �� ����
	
	//�⺻ �Ѹ� ���
	function rolling (){
		$(".slide > li").fadeOut(1000);
		$(".slide > li").eq(i).fadeIn(1000);
		$(".slide > li").removeClass("current");	
		$(".slide > li").eq(i).addClass("current");	
		$(".dot_wrap li").find(".act_prog").css("width", 0+'%');
		$(".dot_wrap li").removeClass("dot_on");
		$(".dot_wrap li").eq(i).addClass("dot_on");
		$(".dot_wrap li").eq(i).find(".act_prog").css("width", 100+'%');
		
		};
		
	//�̹��� �� ���� �� ��Ʈ. ����.	
	function fade() {
		if (i < ims){i++;}
		else if (i >= ims){i = 0;};
		rolling ();
		};	
		
	//��Ŭ��
	$(".mnext").click(function (){
		if(i < ims){
		i++;
		rolling ();
		} else if (i >= ims){
		i = 0;
		rolling ();
			};
		});
		
	//��Ŭ��
	$(".mprev").click(function (){
		if(i == 0){
		i = ims;
		rolling ();
		} else if (i <= ims){
		i -= 1;
		rolling ();
			};
		});	
	
	//���� ��Ʈ Ŭ�� ��
	$(".dot_wrap li").click(function (){
		var d = $(this).index(".dot_wrap li");
		i = d;	
		rolling ();		
		});	
	
	//�߿�. ó�� ������ �ε� �� �� ���͹� �۵�. ���͹� ���� ����. ��, ���̵� �Ǵ� �����ִ� �ð� - �ٲ�� �ð�(1��)	
	var thefades = setTimeout(function (){
		fade();
		thefades2 = setInterval (fade,7000);
		}, 6000);
		
	//��Ʈ�� ���콺 ���� �� �ڵ� ���� ���	
	$(".thestop").hover(
	function (){
		clearTimeout(thefades);
		clearInterval(thefades2);
		},
	function (){
		thefades = setTimeout(function (){
		fade();
		thefades2 = setInterval (fade,7000);
		}, 6000);	
	});	

	  	
	$(".scroll").click(function (){
		var sctop = $(".contents").offset().top;
		$("html, body").animate({scrollTop :sctop}, 500);
		});
		
	
	/*���߽����̵�*/
	$(".img_fade > li").first().show();		
	var w = 0;	
	var ims2 = $(".img_fade > li").length -1; // �� ����
	
	//���� �����̵� �⺻ ���
	function rolling2 (){
		$(".img_fade > li").fadeOut(700);
		$(".img_fade > li").eq(w).fadeIn(700);	
		$(".indots > li").removeClass("inon");
		$(".indots > li").eq(w).addClass("inon");
		
		var ticurr = $(".si_title > li").eq(w);			
		$(".si_title > li:not(ticurr)").removeClass("ontitle").addClass("outitle");
		$(".si_title > li").eq(w).removeClass("outitle").addClass("ontitle");		
		
		var current = $(".si_txt > li").eq(w);			
		$(".si_txt > li:not(current)").removeClass("theon").addClass("theout");
		$(".si_txt > li").eq(w).removeClass("theout").addClass("theon");		
		};
		
	//�̹��� �� ���� �� ��Ʈ. ����.	
	function fade2() {
		if (w < ims2){w++;}
		else if (w >= ims2){w = 0;};
		rolling2 ();
		};	
		
	//��Ŭ��
	$(".pnext").click(function (){
		if(w < ims2){
		w++;
		rolling2 ();
		} else if (w >= ims2){
		w = 0;
		rolling2 ();
			};		
	
		$(".si_title:not(:animated)").animate({marginTop:parseInt($(slide).css("margin-top"))-theheight}, 700, function (){
		$(".si_title > li").first().appendTo(slide);
		$(slide).css("margin-top", -theheight);			
		});
		
		});
		
	//��Ŭ��
	$(".pprev").click(function (){
		if(w == 0){
		w = ims2;
		rolling2 ();
		} else if (w <= ims2){
		w -= 1;
		rolling2 ();
			};
		$(".si_title:not(:animated)").animate({marginTop:parseInt($(slide).css("margin-top"))+theheight}, 700, function (){
		$(".si_title > li").last().prependTo(slide);
		$(slide).css("margin-top", -theheight);			
		});
		});
	
	//���� ��Ʈ Ŭ�� ��
	$(".indots li").click(function (){
		var d2 = $(this).index(".indots li");
		w = d2;	
		rolling2 ();		
		});		
	
		

		
	 	//���� �׺�
	$(".left_links").click(function (){
		if ($(".li_left").css("display") == "none"){
		$(".li_left").slideDown(300);
		} else {
			$(".li_left").slideUp(300);
			};		
         });
    $(".right_links").click(function (){
		if ($(".li_right").css("display") == "none"){
		$(".li_right").slideDown(300);
		} else {
			$(".li_right").slideUp(300);
			};		
         });	

     /*ȭ�� ��ũ��*/
	 if($(window).scrollTop() < 120) {
		    $(".gotop").hide();
		  } else if ($(window).scrollTop() > 120){
		    $(".gotop").show();
			  };
	 
	 $(window).scroll(function (){		 
		if($(window).scrollTop() < 120) {
		    $(".gotop").fadeOut(300);
		  } else if ($(window).scrollTop() > 120){
		    $(".gotop").fadeIn(300);
			  };
			  
		if($(window).scrollTop() > 630){
			$(".subtab_wrap").css("position", "fixed");
			} else if ($(window).scrollTop() < 630){
				$(".subtab_wrap").css("position", "inherit");
				};	 
		 });
		 
  //�ϴ� ���»� �����̵�
  var slide = $(".partner_slide");
  var side_li = $(".partner_slide > li");
  var theeq = $(side_li).length;
  var thewidth = $(side_li).width();
  $(slide).css("width", theeq * thewidth * 2);
  $(slide).css("margin-left", -thewidth);
  $(side_li).last().prependTo(slide);
  var s = 0;
  
  //��Ŭ��
  $(".partner_left").click(function (){
	 $(".partner_slide:not(:animated)").animate({marginLeft:parseInt($(slide).css("margin-left"))-thewidth}, 300, function (){
		$(".partner_slide > li").first().appendTo(slide);
		$(slide).css("margin-left", -thewidth);			
		});
		s++;		
		if (s < theeq){		
			} else if (s >= theeq -1){
				s = 0;				
				}
	  });
	  
  //��Ŭ��  
  $(".partner_right").click(function (){
	 $(".partner_slide:not(:animated)").animate({marginLeft:parseInt($(slide).css("margin-left"))+thewidth}, 300, function (){
		$(".partner_slide > li").last().prependTo(slide);
		$(slide).css("margin-left", -thewidth);	
		});		
		
		if (s > 0){
			s -= 1;		
			} else if (s == 0){
				s = theeq -1;	
				};
	  });
		
});	





