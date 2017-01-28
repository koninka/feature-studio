import {BODY, ACTIVE} from './_constants';

export const NAV = {

	_btn: $('.js-btn-nav'),
	_container: $('.js-nav'),

	_toggleOnClick() {
		BODY.on('click', '.js-btn-nav', e => {
			if (this._container.hasClass(ACTIVE)) {
				this.close();
			} else {
				this.open();
			}
		});
	},

	open() {
		NAV._btn
			.add(NAV._container)
			.addClass(ACTIVE);
	},

	close() {
		NAV._btn
			.add(NAV._container)
			.removeClass(ACTIVE);
	}

};