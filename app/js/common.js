$(function() {
	$(window).on("load",function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
        	offset: 50,
        	onStart:function(){
        		$(".main__nav_mobile").removeClass("opened");
        	}
        });
    });

	$(document).ready(function(){
	  $(".owl-brands").owlCarousel({
	  	margin: 31,
	  	dots: false,
	  	responsive: {
	  		768: {
	  			items: 6
	  		},
	  		320: {
	  			items: 3
	  		}
	  	}
	  });
	});

	$(document).ready(function() {
	  $('.magnific-link').magnificPopup({type:'image'});
	});

	$(".menu-toggle").click(function(e) {
		e.preventDefault();
		$(".main__nav_mobile").toggleClass("opened");
	});


});
