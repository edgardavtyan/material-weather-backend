const geocoder = require('geocoder')

module.exports.geocode = function(location) {
	return new Promise((resolve, reject) => {
		geocoder.geocode(location, (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}