$(function() {

	/*MENU*/

	let $menuButton = $(".menu-button button");
	let $menuButtonImg = $(".menu-button button img");
	let $menu = $("header nav");

	$menuButton.on("click", function(e) {
		e.preventDefault();

		if ($menu.css("display") === "none") {
			$menu.slideDown(400, function() {
				$menuButtonImg.attr("src", "img/arrow-top.png");
			});
		} else {
			$menu.slideUp(400, function() {
				$menuButtonImg.attr("src", "img/arrow-down.png");

				if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}
			});
		}
	});

	/*FOOTER*/

	let $footerHeaders = $(".footer-item h3");

	$footerHeaders.on("click", function() {
		if ($(window).width() < 768) {
			if ($(this).next().css("display") == "none") {
				$(this).next().slideDown(400);
			} else {
				$(this).next().slideUp(400, function() {
					if($(this).css('display') === 'none'){
						$(this).removeAttr('style');
					}
				});
			}
		}
	});

	/*BUTTON*/

	let $button = $(".button-top button");

	$(document).on("scroll", function() {
		if ($(document).scrollTop() > 100) {
			$button.fadeIn(400);
		} else {
			$button.fadeOut(400);
		}
	});

	$button.on("click", function(e) {
		e.preventDefault();

		$("html, body").animate({
			scrollTop: "0px"
		}, 400);
	});
});