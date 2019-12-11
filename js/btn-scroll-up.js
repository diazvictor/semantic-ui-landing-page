/*************************************************************
* - Responsive-UI v1.0.0 	                                 *
* - Copyright 2016, Vector008                                *
* - 8/20/2016                                                *
*************************************************************/
/* ===========================================================
==  Button Up												 =
== =========================================================*/

$(document).ready(function(){
	$('.btn-scroll-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		});
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 800 ){
			// $('.btn-scroll-up').slideDown(300);
			$('.btn-scroll-up').fadeIn();
			// $('.btn-scroll-up').hiden()
		} else {
			// $('.btn-scroll-up').slideUp(300);
			$('.btn-scroll-up').fadeOut();
			// $('.btn-scroll-up').show()
		}
	});
});
