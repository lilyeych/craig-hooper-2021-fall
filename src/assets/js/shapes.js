$(function() {
	if ($('.homepage')) {
		// $('.shapes img').each(function() {
		// 	$(this).css("top", `${$(this).data( "top" )}px`);
		// });

		const shapesContainer = $('.shapes');
		const shapesGroup = `<div class="shapes-group">
		<img class="parallax" src="assets/img/star-peach.svg" width="70" height="70" loading="lazy" alt="" />
		<img class="parallax" src="assets/img/star-plum.svg" width="70" height="70" loading="lazy" alt="" />
		<img class="parallax" src="assets/img/star-craig.png" width="270" height="270" loading="lazy" alt="" />
		<img class="parallax" src="assets/img/star-apple.svg" width="170" height="170" loading="lazy" alt="" />
		<img class="parallax" src="assets/img/star-peach.svg" width="70" height="70" loading="lazy" alt="" />
		<img class="parallax" src="assets/img/star-apple.svg" width="170" height="170" loading="lazy" alt="" />
	</div>`;

		for (let i = 0; i < 13; i++) {
			shapesContainer.append(shapesGroup);
		}
	}
});