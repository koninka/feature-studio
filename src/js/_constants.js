export const {
	touch,
	BODY,
	ACTIVE
} = {
	touch() {
		return 'ontouchstart' in window;
	},
	BODY: $('body'),
	ACTIVE: 'is-active'
};