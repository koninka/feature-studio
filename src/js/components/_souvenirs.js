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
	if(!$('.promo_wrap').length) {
		return;
	}

	var top_scroll = $(this).scrollTop();
	if (top_scroll > souv_height) {
		$('.promo_wrap').fadeIn(600);
		$('.promo_wrap').height($(document).height());
		$('body').css('overflow', 'hidden');
		$('body').on('touchmove', function (e){
			if (!$('.promo-wrapper').has($(e.target)).length) e.preventDefault();
		});
		var height_promo = $('.promo').height()
		var new_height = ($(window).height() - height_promo)/2;
		if (height_promo < $(window).height()) {
			$('.promo').css({'top': new_height});
		} else {
			$('.promo').css('top', '0');
		}
		var robo_location = $('.promo-wrapper').height() - new_height - height_promo - 5;
		if ($(window).width() > 1200) {
			$('.promo-img').css({'bottom': robo_location});
		}
	}
};
		let souv_height = $('.souvenirs').height()/2;

		if($('.promo_wrap').length) {
			$(window).on('scroll', fetchModalWin);
		}

		$('.btn_close').click(function(){
			$('.promo_wrap').fadeOut();
			$('body').css('overflow', 'auto');
			$('body').off('touchmove');
			$(window).off('scroll', fetchModalWin);
		});
		$('.promo_wrap').click(function(e){
			if(!$('.promo-wrapper').has($(e.target)).length){
				$('.promo_wrap').fadeOut();
				$('body').css('overflow', 'auto');
				$('body').off('touchmove');
				$(window).off('scroll', fetchModalWin);
			}
		});
};


$(".souvenirs__link, .steps__link").click(function (event) {
	 event.preventDefault();
	 var idElement  = $(this).attr('href'),
		 topElement = $(idElement).offset().top;
	 $('html, body').animate({scrollTop: topElement}, 1500);
 });
