import './../lib/jquery.form-validator.min';

const VALIDATION = () => {
	let form = $('.js-form');
	let errorClass = 'has-error';
	let formField = $('.js-form-field');

	formField.on({
		focus(e) {
			$(this).parents('.js-form-parent').addClass('has-focus');
		},
		blur(e) {
			$(this).parents('.js-form-parent').removeClass('has-focus');
		}
	});

	function serializeForm($form) {
			return $form.serializeArray().reduce(function(m,o){
			m[o.name] = $(m).hasClass('phone-field') ? o.value.replace(/([\s()-])/g, '') : o.value;

			return m;
		}, {});
	}

	function beforeFormSubmit($form) {
		$form.find('.btn').addClass('btn--not_hover');

		$form.find('.js-form-field').css('opacity','0.3').prop('disabled', true);
		$form.find('.btn_text--hide').html('Отправляется...');
	};

	function successFormSubmit($form) {
			var $okayWrap = $form.find('.okay__wrap');
			$okayWrap.fadeIn();

			$form.find('.btn_text--hide').html('Отправлено');
			$form.find('.galka').fadeIn();
			setTimeout(function(){
				$okayWrap.fadeOut();
			}, 1500);
	};

	function formSubmit($form, handler) {
		if ($form.find('.has-error').length !== 0 ) {
			return false;
		};

		if ($form.find('.btn').hasClass('btn--not_hover')) {
			return false;
		}

		let data = serializeForm($form);

		beforeFormSubmit($form);

		handler(data);
	}

	form.each(function() {
		let errorContainer = $(this).find('.js-error-msg');
		$.validate({
			form : this,
			borderColorOnError: false,
			scrollToTopOnError: false,
			errorMessagePosition: errorContainer,
			validateOnBlur : false,
			errorElementClass: errorClass,
			onError(form) {
				let input = form.find(`.js-form-field.${errorClass}`);
				let parent = input.parents('.js-form-parent');
				let firstErrorField = parent.get(parent.length-1);
				let top = $(firstErrorField).position().top;

				errorContainer.css('top', top);
				parent.addClass(errorClass);
			}
		});
	});

	$('.service-form').submit(function(e) {
		e.preventDefault();

		var $form = $(this);

		formSubmit($form, function (data) {
			window.handlers.service(data, function (response) {
				successFormSubmit($form);
			});
		});

	});

	$('.price-form').submit(function(e) {
		e.preventDefault();

		var $form = $(this);

		formSubmit($form, function (data) {
			window.handlers.price(data, function (response) {
				successFormSubmit($form);
			});
		});

	});

	$('.souvenirs-form').submit(function(e) {
		e.preventDefault();

		var $form = $(this);

		formSubmit($form, function (data) {
			window.handlers.discount(data, function (response) {
				successFormSubmit($form);
			});
		});

	});
};


export default VALIDATION;
