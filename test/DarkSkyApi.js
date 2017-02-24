const expect = require('expect.js')
const DarkSkyApi = require('../src/DarkSkyApi')

describe('DarkSkyApi', () => {
	let darkSkyApi

	beforeEach(() => {
		darkSkyApi = new DarkSkyApi(process.env.API_KEY || require('../src/apikey'))
	})

	it('get forecast', async () => {
		const forecast = await darkSkyApi.getForecast('Kyiv')
		expect(forecast.currently.summary).to.be.a('string')
		expect(forecast.currently.temperature).to.be.a('number')
	})
})