import mobileNav from './modules/mobile-nav'
mobileNav()

// import autoCompleteFunc from './modules/autoCompleteFunc'
// autoCompleteFunc()

import autoComplete from '@tarekraafat/autocomplete.js'
import countryList from './helpers/countryList'
const autoCompleteJS = new autoComplete({
	selector: '#autoComplete',
	placeHolder: 'e.g Bali, Indonesia',
	data: {
		src: countryList,
		cache: true,
	},
	resultItem: {
		highlight: true,
	},
	events: {
		input: {
			selection: event => {
				const selection = event.detail.selection.value
				autoCompleteJS.input.value = selection
			},
		},
	},
	resultsList: {
		maxResults: 10,
	},
})

import easepickFunc from './modules/easepick'
easepickFunc()

import swiperPopularFunc from "./modules/swiper-popular"
swiperPopularFunc()

import swiperTestimonialsFunc from "./modules/swiper-testimonials"
swiperTestimonialsFunc()

import scrollRevealFunc from "./modules/scrollReveal";
scrollRevealFunc()
