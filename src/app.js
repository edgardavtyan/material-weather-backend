const express = require('express')
const DarkSkyApi = require('./DarkSkyApi')

const app = express()

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on localhost:${port}`))

app.get('/:location', async (req, res) => {
	const apikey = process.env.API_KEY || require('./apikey')
	const darkSkyApi = new DarkSkyApi(process.env.API_KEY || require('./apikey'))
	const forecast = await darkSkyApi.getForecast(req.params.location)
	res.send(forecast)
})