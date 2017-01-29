import './../lib/jquery.form-validator.min';


const VALIDATION = () => {
	let form = $('.js-form');
	let errorClass = 'has-error';

	form.each(function() {
		$(this).submit(e => {
			e.preventDefault();
		});
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
				parent.addClass(errorClass);
			}
		});
	});
};

export default VALIDATION;