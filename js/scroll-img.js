/*
var this_element;
$(window).on('load',function(){
	this_element = jQuery('#move-img').offset().top + jQuery('#move-img').outerHeight();
});

jQuery(window).scroll(function(){
	if(jQuery(window).scrollTop() + jQuery(window).height() > this_element){
		jQuery('button').fadeOut();
	} else {
		;
	}
});
*/

$(function(){
  $(window).scroll(function(){
	  $(function(){
		  //tb以下
		if (window.matchMedia("(max-width: 1023px)").matches) {
			var height2 = $(this).scrollTop();
			var yLine2 = height2 - 1030;
	  		$('#move-img').css('background-position', 'left top ' +parseInt( yLine2 / 4 ) +'px');
	  } else {
		  //PC
			var height1 = $(this).scrollTop();
			var yLine1 = height1 - 1680;
		  	$('#move-img').css('background-position', 'left top ' +parseInt( yLine1 / 1 ) +'px');
	  }
		});
	});
});