import slick from 'slick-carousel';
	
// 	sliderNav.slick({
// 		lazyLoad: 'ondemand',
// 		slidesToShow: 5,
// 		slidesToScroll: 1,
// 		asNavFor: '.js-modal-slider-for',
// 		dots: false,
// 		focusOnSelect: true
// 	});
// };


;(function(){
	let productItem = $('.js-product'),
		productLink = $('.js-product-link');
	productLink.on('click', function() {
		let _this = $(this);
		productLink.removeClass('is-active');
		_this.addClass('is-active');
		MODAL(_this);
		return false;
	});
})();

const MODAL = (link) => {
	let product = $('.js-product'),
		parent = link.parent('.js-product'),
		parents = link.parents('.js-product-list'),
		name = link.data('name'),
		modals = $('.js-modal'),
		modalWrap = $('.js-modal-wrap'),
		activeModal = $("[data-modal="+name+"]"),
		sliderFor = activeModal.find('.js-modal-slider-for'),
		sliderNav = activeModal.find('.js-modal-slider-nav'),
		windowWidth = $(window).width(),
		parentPrevAll = parent.prevAll().length;
	
	if (!sliderFor.hasClass('slick-initialized') && !sliderNav.hasClass('slick-initialized')) {
		sliderFor.slick({
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.js-modal-slider-nav'
		});
		sliderNav.slick({
			lazyLoad: 'ondemand',
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.js-modal-slider-for',
			dots: false,
			focusOnSelect: true
		});
	}
	
	let counter = () => {
		if (windowWidth > 900) {
			return 5;
		}
		else {
			return 3;
		}
	};

	let getIndex = () => {
		return ( Math.floor( parentPrevAll/counter() ) * counter() + counter() ) - 1;
	};

	console.log(getIndex());

	// modalWrap.remove();
	// parents.find('.js-product').eq(getIndex()).after('<div class="js-modal-wrap"></div>');
	// activeModal.appendTo('.js-modal-wrap');
};
