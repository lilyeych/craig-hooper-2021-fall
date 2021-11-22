document.body.addEventListener(
	"load",
	(e) => {
		if (e.target.tagName != "IMG") {
			return;
		}
		// Remove the blurry placeholder.
		e.target.style.backgroundImage = "none";
	},
	/* capture */ true
);