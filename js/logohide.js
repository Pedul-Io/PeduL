$(document).ready(function() {

	$('#fade').fadeOut();

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#fade').fadeIn();
     }
     else if ($(this).scrollTop()===0)
     {
        $('#fade').fadeOut();
     }
    else
     {
      $('#fade').fadeIn();
     }
 });
	
});