export const {
	touch,
	BODY,
	WIN,
	ACTIVE
} = {
	touch() {
		return 'ontouchstart' in window;
	},
	BODY: $('body'),
	WIN: $(window),
	ACTIVE: 'is-active'
};