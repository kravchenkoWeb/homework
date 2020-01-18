$(document).ready(function() {

	$(".overlay").css("opacity", "0");
	$(".modal").css("top", "-100%");

	function showElemnents() {
		$(".overlay").css("display", "block").animate({
			opacity: 1
		});
		$(".modal").css("display", "block").animate({
			top: "20%"
		});
	}

	function hiddingAnimation() {
		$(".overlay").animate({
			opacity: 0
		});
		$(".modal").animate({
			top: "-100%"
		});
	}

	function hideElements(callback) {
		hiddingAnimation();
		callback();
	}

	$("a[href='#sheldure']").on("click", function() {
		showElemnents();
	});

	$(".main_btna").on("click", function() {
		showElemnents();
	});

	$(".main_btn").on("click", function() {
		showElemnents();
	});

	$(".close").on("click", function() {
		hideElements(function() {
			setTimeout(function() {
				$(".overlay").css("display", "none");
			$(".modal").css("display", "none");
		}, 500);
		});
	});
});