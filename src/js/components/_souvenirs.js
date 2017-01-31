
export const SOUVENIRS = () => {

	let section = $('.js-souvenirs');

	section.each(function() {
		let _this = $(this);
		let slider = _this.find('.js-souvenirs-slider');
		let prev = _this.find('.js-souvenirs-prev');
		let next = _this.find('.js-souvenirs-next');

		slider.slick({
			prevArrow: prev,
			nextArrow: next,
			fade: true,
			slidesToShow: 1
		});
	});
};