import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

let swiperTestimonials1,
	swiperTestimonials2,
	swiperTestimonials3,
	swiperHorizontal

const config = {
	direction: 'vertical',
	slidesPerView: 'auto',
	spaceBetween: 0,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
}
const configHorizontal = {
	direction: 'horizontal',
	slidesPerView: 'auto',
	spaceBetween: 32,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
	},
}

function swiperTestimonialsFunc(){
	const breakpoint = window.matchMedia('(max-width:1023px)')
	const breakpointChecker = function(){
		if(breakpoint.matches === true){
			swiperHorizontal = new Swiper(
				'#testimonials-horizontal-swiper',
				configHorizontal
			)
	
			if (swiperTestimonials1 !== undefined)
				swiperTestimonials1.destroy(true, true)
			if (swiperTestimonials2 !== undefined)
				swiperTestimonials2.destroy(true, true)
			if (swiperTestimonials3 !== undefined)
				swiperTestimonials3.destroy(true, true)
			
			return
		} else if (breakpoint.matches === false) {
			swiperTestimonials1 = new Swiper('#testimonials-col-1', config)
			swiperTestimonials2 = new Swiper('#testimonials-col-2', config)
			swiperTestimonials3 = new Swiper('#testimonials-col-3', config)
	
			if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true)
	
			return
		}
	}

	breakpoint.addListener(breakpointChecker)
	breakpointChecker()
}

export default swiperTestimonialsFunc