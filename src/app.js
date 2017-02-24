const express = require('express')
const DarkSkyApi = require('./DarkSkyApi')

const app = express()

app.listen(3000, () => console.log('Server is listening on localhost:3000'))

app.get('/', async (req, res) => {
	const darkSkyApi = new DarkSkyApi('de12b3603c4b1ddc642f1c5a17643dc3')
	const forecast = await darkSkyApi.getForecast('Kyiv')
	res.send(forecast)
})