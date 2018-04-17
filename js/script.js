$(document).ready(function($) {  

  $('.animated').appear();

//  $('header h1').addClass("tada visible");
  $('h1').addClass("zoomIn visible"); //bounceInDown

  $('.animated').on('appear', function() {
    var elem = $(this);
    var animation = elem.data('animation');

    if (!elem.hasClass('visible')) {
      var animationDelay = elem.data('animation-delay');

      if (animationDelay) {
        window.setTimeout(function() {
          elem.addClass(animation + " visible");
        }, animationDelay);
      } else {
        elem.addClass(animation + " visible");
      }
    }
  });
	
		
//   $("path").hover(function(){
//        $(this).addClass("animated bounce");
//    });
//	
  
});