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
		parentPrevAll = parent.prevAll().length,
		rowCounter,
		row;
	
	if (!sliderFor.hasClass('slick-initialized')) {
		sliderFor.slick({
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.js-modal-slider-nav'
		});
	}
	
	if (!sliderNav.hasClass('slick-initialized')) {
		sliderNav.slick({
			lazyLoad: 'ondemand',
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.js-modal-slider-for',
			dots: false,
			focusOnSelect: true
		});
	}
	
	function whole(num) {
		return (num ^ 0) === num;
	}

	if (windowWidth > 900) {
		rowCounter = 5;
	}
	else {
		rowCounter = 3;
	};

	row = parentPrevAll/rowCounter;
	
	if (whole(row)) {
		if (row == 0) {
			row = 0;
		}
	}
	else {
		row = Math.floor(row);
	};

	row = row*rowCounter+rowCounter;
	modalWrap.remove();

	console.log(row-1);
	// parents.find('.js-product').eq(row-1).after('<div class="js-modal-wrap"></div>');
	// activeModal.appendTo('.js-modal-wrap');
};
