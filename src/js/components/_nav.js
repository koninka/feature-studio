import {BODY, ACTIVE} from './../_constants';

export const NAV = {

	_btn: $('.js-btn-nav'),
	_container: $('.js-nav'),

	_toggleOnClick() {
		BODY.on('click', '.js-btn-nav', e => {
			e.preventDefault();
			if (this._container.hasClass(ACTIVE)) {
				this.close();
			} else {
				this.open();
			}
		});
		BODY.on('click', e => {
			if (!this._container.hasClass(ACTIVE) ||
				$(e.target).closest('.js-nav').length ||
				$(e.target).closest('.js-btn-nav').length) return;
			this.close();
		});
		$(".js-go-to").on('click', e => {
			this.close();
		});
	},

	open() {
		this._btn
			.add(this._container)
			.addClass(ACTIVE);
	},

	close() {
		this._btn
			.add(this._container)
			.removeClass(ACTIVE);
	},

	init() {
		this._toggleOnClick();
	}

};