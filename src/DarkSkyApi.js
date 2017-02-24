const request = require('./lib-promise/request')
const Geocoder = require('./Geocoder')
const DarkSkyApiJsonConverter = require('./DarkSkyApiJsonConverter')

class DarkSkyApi {
	constructor(apiKey) {
		this.apiKey = apiKey
		this.geocoder = new Geocoder()
		this.jsonConverter = new DarkSkyApiJsonConverter()
	}

	async getForecast(location) {
		const coordinates = await this.geocoder.getCoordinates(location)
		const url = `https://api.darksky.net/forecast/${this.apiKey}/`
		          + `${coordinates.latitude},${coordinates.longitude}`
		          + `?units=si`
		const forecast = JSON.parse((await request(url)).body)
		return this.jsonConverter.convert(forecast)
	}
}

module.exports = DarkSkyApi