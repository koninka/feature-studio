import {BODY, touch} from './_constants';
import {NAV} from './components/_nav';
import MAP from './components/_map';
import VALIDATION from './components/_validation';
import {COUNTER} from './components/_counter';
import './components/_modal-slider';

$(document).ready(e => {
	if (!touch()) BODY.addClass('no-touch');
	NAV.init();
	MAP();
	VALIDATION();
	COUNTER();
});