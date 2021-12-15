$(window).scroll(function() {
	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		window.scrollTo(0, 0);
	}
});