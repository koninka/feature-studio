export const {
	touch,
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
	BODY: $('body'),
	WIN: $(window),
	ACTIVE: 'is-active',
	slickMD: 1202,
	slickSM: 931,
	slickXS: 590
};