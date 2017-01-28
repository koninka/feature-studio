import {BODY} from './_constants';

$(document).ready(e => {
	if (!touch()) BODY.addClass('no-touch');
});