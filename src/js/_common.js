import {BODY, touch} from './_constants';
import {NAV} from './components/_nav';

$(document).ready(e => {
	if (!touch()) BODY.addClass('no-touch');
	NAV.init();
});