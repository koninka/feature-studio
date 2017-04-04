import {BODY, touch} from './_constants';
import {NAV} from './components/_nav';
import {HEADER} from './components/_header';
import MAP from './components/_map';
import VALIDATION from './components/_validation';
import {COUNTER} from './components/_counter';
import './components/_modal-slider';
import {CLIENTS} from './components/_clients';
import {SOUVENIRS} from './components/_souvenirs';
import './components/_scrollTo';
import {ICON} from './components/_icon';

$(document).ready(e => {
	if (!touch()) BODY.addClass('no-touch');
	NAV.init();
	HEADER();
	MAP();
	VALIDATION();
	ICON();
	COUNTER();
	CLIENTS();
	SOUVENIRS();
});