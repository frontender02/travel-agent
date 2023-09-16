import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

function swiperPopularFunc() {
	const swiperPopular = new Swiper('.popular__swiper', {
		slidesPerView: 1,
		spaceBetween: 32,
		breakpoints: {
			425: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 32,
			},
		},
		navigation: {
			nextEl: '.popular__controls-next',
			prevEl: '.popular__controls-prev',
		},
	})
}

export default swiperPopularFunc
