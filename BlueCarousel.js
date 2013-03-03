function BlueCarousel(image_width, height, num_images, time){

	$(document).ready(function(){

		var total_images_width = image_width*num_images;
		console.log(total_images_width);

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
			'margin' : '0',
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
			  }, time, function() {
			    //Fin de la animacion
			  });
			                

			$(".bluecarousel ul").animate({
			    left: '-='+image_width
			  }, time, function() {
				//Fin de la animacion
			  	$('.bluecarousel ul').prepend($('.bluecarousel ul li:last')); 
			     
			  });
			
			// Vuelta a comenzar
			$(".bluecarousel ul").animate({
			    left: '0'
			  }, 0, function() {
			     //Fin de la animacion
			  });


		},1000);

	});

}// Fin de la función
