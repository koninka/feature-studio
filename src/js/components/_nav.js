import {BODY} from './_constants';

export const NAV = {

	_btn: '.js-btn-nav',
	_container: $('.js-nav'),

	_toggleOnClick() {
		BODY.on('click', this._btn, e => {
			if (this._container.hasClass('is-acitve')) {

			}
		});
	}

};