$(document).ready(function() {

$('#loginLink').on('click' , function(){

	var loginBox = $('#loginBox');

	loginBox.css('right', '0px');
	
	var ttEnd = setTimeout(function() {
		
		loginBox.css('right', '999999px');
		
	}, 5000);
	

$('#username').keypress(keypressd);
$('#password').keypress(keypressd);


		function keypressd(){

			if ($('#username').val() != "" || $('#password').val() != "") {
			clearTimeout(ttEnd);
			setTimeout(function() {
				
				loginBox.css('right', '999999px');
			
			}, 15000)
		}

	console.log('Pressed');

};

});


//$('#sliderBar').on('load', function() {
//
//	$(this).animate({outlineWidth: '0px'}, 'slow', function() {
//		
//		$(this).animate({outlineWidth: '5px'}, 'slow');
//	});
//
//});

});