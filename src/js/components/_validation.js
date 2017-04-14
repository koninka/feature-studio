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
	form.submit(function(e) {
		if ( form.find('.has-error').length !== 0 ) {
			return;
		};

		let data = $(this).serializeArray().reduce(function(m,o){
			m[o.name] = $(m).hasClass('phone-field') ? o.value.replace(/([\s()-])/g, '') : o.value;

			return m;
		}, {});

		window.handlers.service(data, function (response) {
			$('.okay__wrap').fadeIn();
			var inputAll = form.find('.js-form-field');
			inputAll.css('opacity','0.3');
			inputAll.prop('disabled', true);
			form.find('.btn_text--hide').html('Отправлено');
			form.find('.galka').fadeIn();
			setTimeout(function(){
				$('.okay__wrap').fadeOut();
			}, 1500);
		});

		e.preventDefault();
	});
};

export default VALIDATION;