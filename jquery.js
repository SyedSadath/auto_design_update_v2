
$(document).ready(function(){

	$('#particles-js').hover(function(){

		$('.mimg').attr('src','img/wheel.png');
	});

	$('.banner34').hover(function(){
		$('.mimg').attr('src','img/wheel.png');
	});

	$('.mimg').hover(function(){
		$(this).attr('src', 'img/wheel_new.png');
		$(this).attr("transform","scale(1.2,1.2)")
		
	});
		
});

