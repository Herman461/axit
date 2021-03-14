let body = document.body;
let icon_menu = document.querySelector('.icon-menu');
let menu_body = document.querySelector('.menu__body');
icon_menu.addEventListener('click', function(e) {
	icon_menu.classList.toggle('_active');
	menu_body.classList.toggle('_active');
	body.classList.toggle('_lock');
})


function ibg() {

	let ibg = document.querySelectorAll("._ibg");
	for (let i = 0; i < ibg.length; i++) {

		if(ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}

	}
}

ibg();

new Swiper(".slider", {
	loop: true,
	autoHeight: true,
	speed: 1000,
	initialSlide: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	}
})


// let oldScrollY = 0;
// let header = document.querySelector('.header');
// let header_container = document.querySelector('.header__container');
// window.onscroll = function() {
// 	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
// 	let newScrollY = scrolled - oldScrollY;

// 	if (newScrollY > 0) {
// 		header.classList.add('_scroll');
// 		header_container.classList.add('_scroll');
// 	} else {
// 		header.classList.remove('_scroll');
// 		header_container.classList.remove('_scroll');
// 	}
// }
