export const {
	touch,
	initSlider,
	BODY,
	WIN,
	ACTIVE,
	slickMD,
	slickSM,
	slickXS
} = {
	touch() {
		return 'ontouchstart' in window;
	},
	initSlider(slider, options) {
		slider.on('init', () => {
			slider.addClass('is-loaded');
		});
		slider.slick(options);
	},
	BODY: $('body'),
	WIN: $(window),
	ACTIVE: 'is-active',
	slickMD: 1202,
	slickSM: 931,
	slickXS: 590
};