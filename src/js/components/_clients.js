import {slickMD, slickSM, slickXS} from './../_constants';

export const CLIENTS = () => {

	let section = $('.js-clients');

	section.each(function() {
		let _this = $(this);
		let slider = _this.find('.js-clients-slider');
		let prev = _this.find('.js-clients-prev');
		let next = _this.find('.js-clients-next');

		slider.slick({
			prevArrow: prev,
			nextArrow: next,
			slidesToShow: 7,
			responsive: [
				{
					breakpoint: slickMD,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: slickSM,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: slickXS,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	});
};