import {WIN} from './../_constants';

export const COUNTER = () => {
	let counter = $('.js-counter');
	let counters = $('.js-counters');
	let counting = () => {
		if (counters.offset().top + counters.outerHeight() <= WIN.scrollTop() + WIN.outerHeight()) {
			WIN.off('scroll', counting);
			counter.each(function() {
				let _this = $(this);
				let numbers = _this.data('number');

				_this.prop('counter', 0).animate({
					counter: numbers
				}, {
					duration: 2000,
					easing: 'swing',
					step(i) {
						_this.text(Math.ceil(i));
					}
				});
			});
		};
	};

	WIN.on('scroll', counting);

};