import {initSlider} from './../_constants';

export const SOUVENIRS = () => {

	let section = $('.js-souvenirs');

	section.each(function() {
		let _this = $(this);
		let slider = _this.find('.js-souvenirs-slider');
		let prev = _this.find('.js-souvenirs-prev');
		let next = _this.find('.js-souvenirs-next');

		initSlider(slider, {
			prevArrow: prev,
			nextArrow: next,
			fade: true,
			slidesToShow: 1
		});
	});

// function removeIOSRubberEffect( element ) {
// 	element.addEventListener( "touchstart", function () {
// 		var top = element.scrollTop, totalScroll = element.scrollHeight, currentScroll = top + element.offsetHeight;
// 			if ( top === 0 ) {
// 				element.scrollTop = 1;
// 			} else if ( currentScroll === totalScroll ) {
// 				element.scrollTop = top - 1;
// 			}
// 	});
// }
// removeIOSRubberEffect(document.querySelector('.promo_wrap'));


function fetchModalWin () {
	var top_scroll = $(this).scrollTop();
	if (top_scroll > souv_height) {
		$('.promo_wrap').fadeIn(600);
		$('body').css('overflow', 'hidden');
		$('body').on('touchmove', function (e){
			if(!$('.promo-wrapper').has($(e.target)).length) e.preventDefault();
		});
	}
};
		let souv_height = $('.souvenirs').height()/2;
		$(window).on('scroll', fetchModalWin);
		$('.btn_close').click(function(){
		$('.promo_wrap').fadeOut();
		$('body').css('overflow', 'auto');
		$(window).off('scroll', fetchModalWin);
	});
};


$(".souvenirs__link").click(function (event) {
	 event.preventDefault();
	 var idElement  = $(this).attr('href'),
		 topElement = $(idElement).offset().top;
	 $('body').animate({scrollTop: topElement}, 1500);
 });
