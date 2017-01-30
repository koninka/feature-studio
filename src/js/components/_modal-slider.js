import { ACTIVE } from './../_constants';
import slick from 'slick-carousel';

;(function(){

	let productLink = $('.js-product-link');

	productLink.on('click', function() {
		MODAL($(this));
		return false;
	});

})();

const MODAL = (link) => {
	let product = $('.js-product'),
		parent = link.parent('.js-product'),
		parents = link.parents('.js-product-list'),
		item = parents.find('.js-product'),
		productLink = $('.js-product-link'),

		name = link.data('name'),
		modals = $('.js-modal'),
		modalWrap = $('.js-modal-wrap'),
		modal = $("[data-modal="+name+"]"),
		openModal = $(".js-product-list .js-modal"),
		delay = 300,
		
		windowWidth = $(window).width(),
		productPrevAll = parent.prevAll().length,

		slickFor = '.js-modal-slider-for',
		slickNav = '.js-modal-slider-nav';
	
	
	let counter = () => {
		if (windowWidth > 900) {
			return 5;
		}
		else {
			return 3;
		}
	};

	let getIndex = () => {
		return ( Math.floor( productPrevAll/counter() + 1 ) * counter() ) - 1;
	};

	let createModal = () => {
		let wrapper = '.js-modal-wrap',
			tamplate = '<div class="js-modal-wrap"></div>';

		modalWrap.remove();
		item.eq( getIndex() ).after(tamplate);

		if (openModal.length) {
			modal.clone().appendTo(wrapper).show();
		}
		else {
			modal.clone().appendTo(wrapper).slideDown(delay);
		}

	}

	let hideModal = () => {
		
		openModal.slideUp(delay);
		setTimeout(() => {
			modalWrap.remove();
		}, delay);
	};

	let createActiveItem = () => {
		
		if (link.hasClass(ACTIVE)) {
			productLink.removeClass(ACTIVE);
			hideModal();
		}
		else {
			productLink.removeClass(ACTIVE);
			link.addClass(ACTIVE);
			createModal();
		}
	}
	createActiveItem();

	let initSlider = () => {
		let activeModal = parents.find("[data-modal="+name+"]"),
			sliderFor = activeModal.find(slickFor),
			sliderNav = activeModal.find(slickNav),
			slickActive = 'slick-initialized',
			loaded = 'is-loaded',

			sliderForOptions = {
				lazyLoad: 'ondemand',
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: slickNav
			},

			sliderNavOptions = {
				lazyLoad: 'ondemand',
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: slickFor,
				dots: false,
				focusOnSelect: true
			};

		sliderFor.on('init', function() {
			sliderFor.addClass(loaded);
		});
		sliderNav.on('init', function() {
			sliderNav.addClass(loaded);
		});

		if ( !sliderFor.hasClass(slickActive) && !sliderNav.hasClass(slickActive) ) {
			sliderFor.slick(sliderForOptions);
			sliderNav.slick(sliderNavOptions);
		};
	};
	initSlider();
	
};