const request = require('request')

module.exports = function(url) {
	return new Promise((resolve, reject) => {
		request(url, (err, res, data) => {
			if (err) reject(err)
			resolve(res, data)
		})
	})
}