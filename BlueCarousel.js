$(document).ready(function(){

	var image_width = 570;
	var images_number = 3;
	var total_images_width = image_width*images_number;

    /* CSS necesario */
	$(".bluecarousel").css({
		'background-color' : 'yellow',
		'position' : 'relative', 
		'width' : '570px',
		'height' : '270px', 
		'overflow' : 'hidden',
		'font-weight' : 'bolder'
	});
	$(".bluecarousel .blueleft").css({
		'position' : 'absolute',
		'top' : '40%',
		'left' : '0px', 
		'background-color' : 'red',
		'width' : '50px',
		'height' : '50px',
		'z-index' : '10',
		'padding' : '0',
		'font-weight' : 'bolder'
	});
	$(".bluecarousel .blueright").css({
		'position' : 'absolute',
		'top' : '40%',
		'right' : '0px', 
		'background-color' : 'red',
		'width' : '50px',
		'height' : '50px',
		'z-index' : '10',
		'padding' : '0',
		'font-weight' : 'bolder'
	});
	$(".bluecarousel ul").css({
		'position' : 'absolute',
		'top' : '0px',
		'left' : '0px', 
		'padding' : '0',
		'width' : total_images_width,
		'font-weight' : 'bolder'
	});
	$(".bluecarousel ul").css({
		'position' : 'absolute',
		'top' : '0px',
		'left' : '0px', 
		'padding' : '0',
		'font-weight' : 'bolder'
	});
	$(".bluecarousel ul li").css({
		'float' : 'left', 
		'list-style' : 'none', 
		'font-weight' : 'bolder'
	});

	/* Animaciones */

	setInterval(function(){

		$(".bluecarousel ul").animate({
		    left: '-='+image_width
		  }, 3000, function() {
		    
		  });
		                

		$(".bluecarousel ul").animate({
		    left: '-='+image_width
		  }, 3000, function() {
		  	$('.bluecarousel ul').append($('.bluecarousel ul li:first'));
		  	$('.bluecarousel ul').prepend($('.bluecarousel ul li:last')); 
		     
		  });
		
		$(".bluecarousel ul").animate({
		    left: '0'
		  }, 0, function() {
		     
		  });


	},1000);

	
















});
