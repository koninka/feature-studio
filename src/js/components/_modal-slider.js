import slick from 'slick-carousel';

const SLICKMODAL = () => {
	let sliderFor = $('.js-modal-slider-for'),
		sliderNav = $('.js-modal-slider-nav');

	sliderFor.slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-modal-slider-nav'
	});
	sliderNav.slick({
		lazyLoad: 'ondemand',
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.js-modal-slider-for',
		dots: false,
		focusOnSelect: true
	});
};

export default SLICKMODAL;