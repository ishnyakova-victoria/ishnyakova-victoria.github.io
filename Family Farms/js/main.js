$(function() {

	/*ANIMATIONS*/

	let wow = new WOW({
		boxClass: 'wow',     
		animateClass: 'animated',
		offset: 40,         
		mobile: true,      
		live: true       
	});

	wow.init();

	/*BUTTON*/

	let $button = $(".button-top button");

	$(document).on("scroll", function() {
		if ($(document).scrollTop() > 100) {
			$button.fadeIn(700);
		} else {
			$button.fadeOut(700);
		}
	});

	$button.on("click", function(e) {
		e.preventDefault();

		$("html, body").animate({
			scrollTop: "0px"
		}, 700);
	});
});