import autoComplete from '@tarekraafat/autocomplete.js'
import countryList from './../helpers/countryList'

function autoCompleteFunc() {
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
}

export default autoCompleteFunc
