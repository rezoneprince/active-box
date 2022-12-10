/*header scrolling fixed*/
window.addEventListener("scroll", function(){

	var header = document.querySelector("header");

	header.classList.toggle("sticky", window.scrollY > 100);
});
/*header scrolling fixed*/


$('.slider_main').slick({
	autoplay: true,
	arrows: false,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
});

$('.banner-slider').slick({
	autoplay: true,
	arrows: false,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
});


 