const assert = require('assert')
const geocoder = require('../../src/lib-promise/geocoder')

describe('geocoder', () => {
	it('get geocoding data using async-await', async () => {
		const address = await geocoder.geocode('Kyiv')
		assert.equal(address.results[0].geometry.location.lat, 50.4501)
	})
})