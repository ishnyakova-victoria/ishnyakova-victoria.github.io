$(function() {

	/*MENU*/

	$(".menu-button").on("click", function(e) {
		e.preventDefault();

		$(".main-menu ul").slideToggle(400, function() {
			if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}
		});
	});

	$(".menu a").on("click", function(e) {
		e.preventDefault();

		var selector = $(this).attr("href");
		var h = $(selector);

		$("html, body").animate({
			scrollTop: h.offset().top
		}, 800);
	});

	/*BUTTON*/

	var $button = $(".button-top");

	$(document).on("scroll", function() {
		if ($(document).scrollTop() > 100) {
			$button.fadeIn(1000);
		} else {
			$button.fadeOut(1000);
		}
	});

	$button.on("click", function(e) {
		e.preventDefault();

		$("html, body").animate({
			scrollTop: "0px"
		}, 800);
	});

	/*FORM*/

	var $inputs = $("input[type=text]");

	$("form").on("submit", function(e) {
		var error = false;

		$inputs.each(function(i, input) {
			if ($(input).val() == "") {
				$(input).addClass("error");
				error = true;
			} else {
				$(input).removeClass("error");
			}
		});

		if (error) {
			e.preventDefault();
		}
	});
});