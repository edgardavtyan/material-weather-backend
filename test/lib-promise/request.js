const assert = require('assert')
const request = require('../../src/lib-promise/request')

describe('request', () => {
	it('make requests using async-await', async () => {
		const result = await request('https://edgardavtyan.github.io/for-web-unit-tests/')
		assert.equal(result.body, 'Hello World\n')
	})
})