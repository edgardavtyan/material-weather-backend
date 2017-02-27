const geocoder = require('./lib-promise/geocoder')

class Geocoder {
	async getCoordinates(location) {
		const results = await geocoder.geocode(location)
		const coordinates = results.results[0].geometry.location
		const address = results.results[0].formatted_address
		return {
			longitude: coordinates.lng,
			latitude: coordinates.lat,
			location: address
		}
	}
}

module.exports = Geocoder