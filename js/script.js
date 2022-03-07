
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('#Header').addClass('shrink');
    }
    else {
        $('#Header').removeClass('shrink');
    }
});


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

jQuery(document).ready(function () {
	$("body").css("margin-top",parseInt($("#Header").height()));
	$(window).resize(function() {
		$("body").css("margin-top",parseInt($("#Header").height()));
	});
});