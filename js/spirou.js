// Jan Van Cauwenberge
// Prevent scrolling in google maps embeds
$('.google-maps')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});
			
