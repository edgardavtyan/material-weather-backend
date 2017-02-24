const expect = require('expect.js')
const request = require('../../src/lib-promise/request')

describe('request', () => {
	it('make requests using async-await', async () => {
		const result = await request('https://edgardavtyan.github.io/for-web-unit-tests/')
		expect(result.body).to.be('Hello World\n')
	})
})