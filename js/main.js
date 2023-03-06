$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	margin: 0,
  	loop: true,
  	autoplay: true,
  	responsive:{
	  	300:{
	        dots: false,
	        autoplayTimeout: 4000
	    },
	    574:{
	        dots: true,
	    },
	    768:{
	    	autoplayTimeout: 5000
	    },
	}
  });
});