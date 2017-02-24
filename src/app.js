const express = require('express')
const DarkSkyApi = require('./DarkSkyApi')

const app = express()

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on localhost:${port}`))

app.get('/', async (req, res) => {
	const darkSkyApi = new DarkSkyApi(process.env.API_KEY)
	const forecast = await darkSkyApi.getForecast('Kyiv')
	res.send(forecast)
})