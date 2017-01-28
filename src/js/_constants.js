export const {
	touch,
	BODY
} = {
	touch() {
		return 'ontouchstart' in window;
	},
	BODY: $('body')
};