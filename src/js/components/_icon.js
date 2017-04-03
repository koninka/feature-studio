import {WIN} from './../_constants';

export const ICON = () => {
  let iconWrapper = $('.whywe');
	let icons = $('.quality__item');
	let counting = () => {
		if (iconWrapper.offset().top - 550 <= WIN.scrollTop() ) {
			WIN.off('scroll', counting);
			icons.each(function() {
				let _this = $(this);

        _this.addClass('quality__item--animate');
			});
		};
	};

	WIN.on('scroll', counting);

};