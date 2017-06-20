(function(){
	let goToBtn = $(".js-go-to"),
		htmlBody = $('html, body');
	goToBtn.click(function() {
		var id = $(this).attr("href"),
			posTop = $(id).offset().top;
		scrollTo(posTop);
		return false;
	});
	let scrollTo = (position) => {
	htmlBody.animate({
		scrollTop: position
	}, 700);
};
})();