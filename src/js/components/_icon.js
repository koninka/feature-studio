import { WIN } from './../_constants';

export const ICON = () => {
	let iconWrapper = $('.whywe');
	let icons = $('.quality__item');
	let counting = () => {
		if (iconWrapper.offset().top - 550 <= WIN.scrollTop()) {
			WIN.off('scroll', counting);
			icons.each(function () {
				let _this = $(this);
				_this.addClass('quality__item--animate');
			});
		};
	};

	let oneProduct = $('.product__link');
	oneProduct[0].click();

	WIN.on('scroll', counting);

	$(document).on('click', '.btn--fade_modal', function(){
		// event.preventDefault();
		$('.modals').fadeIn();
	})

	$('.btn_close').on('click', function(){
		// event.preventDefault();
		$('.modals').fadeOut();
	});
};
