import { ACTIVE, products } from './../_constants';
import { productModalContent } from './../_templates';
import slick from 'slick-carousel';
import nunjucks from 'nunjucks';

var template = nunjucks.compile(productModalContent);

(function(){
	let productLink = $('.js-product-link'),
		slickNav = $('.js-product-link .js-modal-slider-nav'),
		sliderPrev = $('.js-slider-nav-prev'),
		sliderNext = $('.js-slider-nav-next');

	productLink.on('click', function() {
		MODAL($(this));
		return false;
	});

	$('.js-product-list').on('click', '.js-slider-nav-prev', function(){
			$('.js-product-list .js-modal-slider-for').slick('slickPrev');
	});
	$('.js-product-list').on('click', '.js-slider-nav-next', function(){
			$('.js-product-list .js-modal-slider-for').slick('slickNext');
	});

})();

const MODAL = (link) => {
	let product = $('.js-product'),
		parent = link.parent('.js-product'),
		parents = link.parents('.js-product-list'),
		item = parents.find('.js-product'),
		productLink = $('.js-product-link'),

		name = link.data('name'),
		type = link.data('type'),
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
		else if (windowWidth > 589) {
			return 4;
		}
		else {
			return 2;
		}
	};

	let getIndex = () => {
			return ( Math.floor( productPrevAll /counter() + 1 ) * counter() ) - 1;
				//return Math.floor(productPrevAll/counter())+counter() - 1;
	};

	let createModal = () => {
		let wrapper = '.js-modal-wrap',
			tamplate = '<div class="js-modal-wrap"></div>';


		modalWrap.remove();
		item.eq( getIndex() > 14 ? 14 : getIndex() ).after(tamplate);

		let data = typeof products[type] !== 'undefined' ? products[type] : {};
		let images = typeof window.productImages[type] !== 'undefined' ? window.productImages[type] : {};

		data.images = images;

		let content = modal.clone().html(template.render(data)).appendTo(wrapper);


		if (openModal.length <= 2) {
			content.show();
			$('.js-product-link').on('click', function (e) {
				$('html, body').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(){
					$('html, body').stop();
				});
				$('html, body').animate({
					scrollTop: $(this).offset().top - 60
				}, 700, function(){
					$('html, body').unbind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove');
				});
				return false;
			});

		}

		if (modal.length === 2){
			let modalsJs = $('[data-modal="product-modal"]');
			modalsJs[1].outerHTML='';
		}
	}

	let hideModal = () => {

		openModal.slideUp(delay);
		setTimeout(() => {
			modalWrap.remove();
		}, delay);
	};

	let createActiveItem = () => {
		if (openModal.length === 2) {
			let modalsJs = $('.modal');
			modalsJs[1].remove();
		}

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
				// lazyLoad: 'ondemand',
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.js-product-list .js-modal-slider-nav'
			},

			sliderNavOptions = {
				// lazyLoad: 'ondemand',
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.js-product-list .js-modal-slider-for',
				arrows: false,
				dots: false,
				focusOnSelect: true,
				responsive: [
					{
						breakpoint: 589,
						settings: {
							slidesToShow: 3
						}
					}
				]
			};

		sliderFor.on('init', function() {
			sliderFor.addClass(loaded);
		});
		sliderNav.on('init', function() {
			sliderNav.parents('.slider-nav-wrap').addClass(loaded);
		});

		if ( !sliderFor.hasClass(slickActive) && !sliderNav.hasClass(slickActive) ) {
			sliderFor.slick(sliderForOptions);
			sliderNav.slick(sliderNavOptions);
		};
	};
	initSlider();

	let classForWidth = $(".slider-for__slide");
	let sliderWidth = classForWidth.width();
	classForWidth.css('height', sliderWidth + 'px' );

};
