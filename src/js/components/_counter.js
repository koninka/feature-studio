import {WIN} from './../_constants';
import './../lib/odometer.min';

export const COUNTER = () => {
	let counter = $('.js-counter');
	let counters = $('.js-counters');
	let counting = () => {
		if (counter.offset().top + counter.outerHeight() <= WIN.scrollTop() + WIN.outerHeight()) {
			WIN.off('scroll', counting);
			WIN.odometerOptions = {
 				auto: true,
 				format: 'd',
 				duration: 1000,
 				animation: 'count'
			};
			counter.each(function() {
				let _this = $(this);
				let numbers = _this.data('number');
				$(this).html(numbers);
			});
		};
	};

	WIN.on('scroll', counting);

};
