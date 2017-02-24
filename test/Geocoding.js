const expect = require('expect.js')
const Geocoder = require('../src/Geocoder')

describe('Geocoding', () => {
	let geocoder

	beforeEach(() => {
		geocoder = new Geocoder();
	})

	it('get correct coordinates', async () => {
		const coordinates = await geocoder.getCoordinates('Kyiv')
		expect(coordinates.latitude).to.be(50.4501)
		expect(coordinates.longitude).to.be(30.5234)
	})
})