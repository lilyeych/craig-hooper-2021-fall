$(function() {
	let today = new Date();
	let startDate = parseDate("1/1/2001");

	// new Date("dateString") is browser-dependent and discouraged, so we'll write
	// a simple parse function for U.S. date format (which does no error checking)
	function parseDate(str) {
		var mdy = str.split("/");
		return new Date(mdy[2], mdy[0]-1, mdy[1]);
	}

	// Take the difference between the dates and divide by milliseconds per day.
	// Round to nearest whole number to deal with DST.
	let diff = Math.round((today-startDate)/(1000*60*60*24));

	$(".days").text(diff.toLocaleString());
});