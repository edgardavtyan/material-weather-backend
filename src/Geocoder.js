const geocoder = require('./lib-promise/geocoder')

class Geocoder {
	async getCoordinates(location) {
		const coordinates = (await geocoder.geocode(location)).results[0].geometry.location
		return {
			longitude: coordinates.lng,
			latitude: coordinates.lat,
		}
	}
}

module.exports = Geocoder