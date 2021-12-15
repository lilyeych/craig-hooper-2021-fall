import peach from '../img/star-peach.svg';
import plum from '../img/star-plum.svg';
import craig from '../img/star-craig.png';
import apple from '../img/star-apple.svg';

$(function() {
	if ($('.homepage')) {
		const shapesContainer = $('.shapes');
		const shapesGroup = `<div class="shapes-group">
			<img class="parallax" src="${peach}" width="70" height="70" loading="lazy" alt="" />
			<img class="parallax" src="${plum}" width="70" height="70" loading="lazy" alt="" />
			<img class="parallax" src="${craig}" width="270" height="270" loading="lazy" alt="" />
			<img class="parallax" src="${apple}" width="170" height="170" loading="lazy" alt="" />
			<img class="parallax" src="${peach}" width="70" height="70" loading="lazy" alt="" />
			<img class="parallax" src="${apple}" width="170" height="170" loading="lazy" alt="" />
		</div>`;

		for (let i = 0; i < 10; i++) {
			shapesContainer.append(shapesGroup);
		}

		$('.shapes .shapes-group').each(function( i ) {
			let multiplyer = 3 * ( i + 1 );

			$(this).find( $('img')).css('paddingBottom', `${multiplyer}px`);
		});

	}
});