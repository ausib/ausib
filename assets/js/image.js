$(function() {
	$("img.lazyimg").lazyload({
		data_attribute: "src",
		effect: "fadeIn",
		effect_speed: 1000,
		placeholder: "assets/img/lazyimg.jpg",
		threshold: -200
	});
});