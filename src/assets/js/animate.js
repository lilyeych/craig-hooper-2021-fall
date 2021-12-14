import './lib/jquery.waypoints.min.js';

$(function() {
	$('.animated').waypoint(function() {
		$(this.element).addClass("fade-in");
	}, { offset: '80%' });
});