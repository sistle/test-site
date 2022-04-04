
new Swiper('.intro__slider', {
	touchRatio: 2,
	observer: true,
	observeParents: true,
	watchOverflow: false,
	slidesPerView: 1,
	centeredSlides:true,
	
	initialSlide: 2,
	spaceBetween: 10,
	navigation: {
		nextEl: '.intro__next',
		prevEl: '.intro__prev'
	},
	autoplay: {
		delay: 4000,
		stopOnLastSlide: true,
		disableOnInteraction:true,
	}
});


