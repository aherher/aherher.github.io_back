$(document).ready(function(e) {
   //���� �̹��� �Ѹ�
	$(".slide li").first().show();
	var i = 0;	
	var ims = $(".slide li").length -1; // �� ����
	
	//�⺻ �Ѹ� ���
	function rolling (){
		$(".slide li").fadeOut(1000);
		$(".slide li").eq(i).fadeIn(1000);	
		$(".dot_wrap li").removeClass("dot_on");
		$(".dot_wrap li").eq(i).addClass("dot_on");
		};
		
	//�̹��� �� ���� �� ��Ʈ. ����.	
	function fade() {
		if (i < ims){i++;}
		else if (i >= ims){i = 0;};
		rolling ();
		};	
		
	//��Ŭ��
	$(".rightarr").click(function (){
		if(i < ims){
		i++;
		rolling ();
		} else if (i >= ims){
		i = 0;
		rolling ();
			};
		});
		
	//��Ŭ��
	$(".leftarr").click(function (){
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
		thefades2 = setInterval (fade,6000);
		}, 5000);
		
	//��Ʈ�� ���콺 ���� �� �ڵ� ���� ���	
	$(".thestop").hover(
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
	
	//top
	$(".top_wrap .go_top").click(function (){
		$(window).scrollTop(0);
		});
 
});