
$(document).ready(function(){

	$('#particles-js').hover(function(){

		$('.mimg').attr('src','img/wheel.png');
		$('.banner34').attr('src','img/car.png');
	});



	$('.banner34').hover(function(){
		$(this).attr('src','img/mustang_car.png');
		$('.mimg').attr('src', 'img/wheel_new.png');
	});

	$('.mimg').hover(function(){
		$(this).attr('src', 'img/wheel_new.png');
		$('.banner34').attr('src','img/mustang_car.png');
		
	});
		
});

