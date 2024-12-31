jQuery(function() {

	$('.header-btn, .bg').on('click', function() {
		$('.header-btn').toggleClass('is-fixed');
		$('.drawer').toggleClass('slidein');
		$('.header-btn span').toggleClass('close');
		$('body').toggleClass('is-noscroll');
		$('.bg').toggleClass('is-show');
	});

	$(window).on('resize', function() {
     if(window.matchMedia("(min-width:769px)").matches) {
	   	$('.header-btn').removeClass('is-fixed');
      	$('.drawer').removeClass('slidein');
      	$('.js-header-btn span').removeClass('close');
      	$('body').removeClass('is-noscroll');
      	$('.bg').removeClass('is-show');
     }
	});
	
	// $(window).scroll(function() {
	//   let scroll = $(window).scrollTop();
	//   $('.top-kv-image').css({
	// 	 'width': ( 80 + scroll / 30 )  + "%",
	//   });
	//   let $window = $(window).width() - 40; 
	//   let $kv_image_width = $('.top-kv-image').width(); 

	//   if( $kv_image_width > $window) {
	//   	$('.top-kv-image').css({
	// 	  'width': 100  + "%",
	// 	});
	//   }
	// });

	/* ==============================================================

	fadein

	================================================================*/
	$(function(){
	  $(".inview").on("inview", function (event, isInView) {
	    if (isInView) {
	      $(this).stop().addClass("is-active");
	    }
	  });
	});

});


