const expect = require('expect.js')
const apiKey = require('../src/apikey')
const DarkSkyApi = require('../src/DarkSkyApi')

describe('DarkSkyApi', () => {
	let darkSkyApi

	beforeEach(() => {
		darkSkyApi = new DarkSkyApi(process.env.API_KEY || apiKey)
	})

	it('get forecast', async () => {
		const forecast = await darkSkyApi.getForecast('Kyiv')
		expect(forecast.currently.summary).to.be.a('string')
		expect(forecast.currently.temperature).to.be.a('number')
	})
})