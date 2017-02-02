/*var navPosition = $('nav').offset().top;
function navScroll(){
	if ($(window).scrollTop()>=navPosition){
		$('nav')
			.css('position','fixed')
			.css('top','0')
			.css('backround-color','#242424')
			/*.css('text-align','center')*/
/*			.css('opacity','.6')
			.css('z-index','2')
			.css('margin-top','0px')
	} else{
		$('nav')
			.css('width','120%')
			.css('z-index','2')
			.css('position','absolute')
			.css('backround-color','#242424')
			.css('opacity','1')
			.css('margin-top','30px')
			}
}*/

/*$(window).scroll(function(){
  if($(window).scrollTop() > 100){
      $('.title').fadeIn("slow");
  }
});
$(window).scroll(function(){
  if($(window).scrollTop() < 100){
      $(".title").fadeOut("fast");
  }
});*/

//Carousel-START
 jQuery(document).ready(function ($) {

     var jssor_1_SlideshowTransitions = [
       {$Duration:1200,$Opacity:2}
     ];

     var jssor_1_options = {
       $AutoPlay: true,
       $SlideshowOptions: {
         $Class: $JssorSlideshowRunner$,
         $Transitions: jssor_1_SlideshowTransitions,
         $TransitionsOrder: 1
       },
       $ArrowNavigatorOptions: {
         $Class: $JssorArrowNavigator$
       },
       $BulletNavigatorOptions: {
         $Class: $JssorBulletNavigator$
       }
     };

     var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

     /*responsive code begin*/
     /*you can remove responsive code if you don't want the slider scales while window resizing*/
     function ScaleSlider() {
         var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
         if (refSize) {
             refSize = Math.min(refSize, 600);
             jssor_1_slider.$ScaleWidth(refSize);
         }
         else {
             window.setTimeout(ScaleSlider, 30);
         }
     }
     ScaleSlider();
     $(window).bind("load", ScaleSlider);
     $(window).bind("resize", ScaleSlider);
     $(window).bind("orientationchange", ScaleSlider);
     /*responsive code end*/
 });
 //Carousel-END

 //Make menu bar fixed after scroll
 $(document).ready(function() {
 var stickyNavTop = $('.menubar').offset().top;
  
 var stickyNav = function(){
 var scrollTop = $(window).scrollTop();
       
 if (scrollTop > stickyNavTop) {
     $('.menubar').addClass('sticky');
     $('#jssor_1')
       .css('margin-top', '50px');

 } else {
     $('.menubar').removeClass('sticky');
     $('#jssor_1')
       .css('margin-top', '0px');
 }
 };
  
 stickyNav();
  
 $(window).scroll(function() {
   stickyNav();
 });
 });


 //Make menu bar fixed after scroll-END
