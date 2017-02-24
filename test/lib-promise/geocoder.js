const expect = require('expect.js')
const geocoder = require('../../src/lib-promise/geocoder')

describe('geocoder', () => {
	it('get geocoding data using async-await', async () => {
		const address = await geocoder.geocode('Kyiv')
		expect(address.results[0].geometry.location.lat).to.be(50.4501)
	})
})