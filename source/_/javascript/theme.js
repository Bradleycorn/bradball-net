$(".menu-handle, #Off-Canvas-Menu .close").click(function(e) {
	//$('body').toggleClass('menu-open');
	if (!$('body').hasClass('menu-open')) {
		$('#Off-Canvas-Menu').show();
		$('body').addClass('menu-open');
	} else {
		$('body').removeClass('menu-open')
		$('#Off-Canvas-Menu').hide();
	}
});


$("#commentform").submit(function(e) {
	var valid = true;
	$("#commentform :input").each(function() {
		input = $(this);
		if (!CheckRequiredField(input, ''))
			valid = false;
	});

	if (!valid)
		$("#commentform-error").show();
	else
		$("#commentform-error").hide();

	return valid;
});

$("#commentform [aria-required=true]").blur(function(e) {
	CheckRequiredField($(this), '');
});

$(".top-link").click(function(e){
	e.preventDefault();
	window.scrollTo(0,0);
});

function CheckRequiredField(input, defaultValue) {
	if ( input.attr('aria-required') === 'true' && !IsValidInput(input, defaultValue) ) {
		if (!input.hasClass("error")) input.addClass('error');
		return false;
	} else {
		input.removeClass('error');
		return true;
	}
}


function IsValidInput(input, defaultValue) {
	if ( ( input.val() == '' || input.val() == defaultValue || (input.attr('name') == 'email' && !IsValidEmail(input) ) ) ) 
		return false;
	return true;
}

function IsValidEmail(input) {
	email = input.val();

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}