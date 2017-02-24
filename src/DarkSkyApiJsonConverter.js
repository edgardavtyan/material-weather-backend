class DarkSkyApiJsonConverter {
	convert(forecast) {
		const result = {}

		result.currently = {
			summary: forecast.currently.summary,
			icon: forecast.currently.icon,
			precipChance: forecast.currently.precipProbability,
			temperature: forecast.currently.temperature,
			tempertureMin: forecast.daily.data[0].temperatureMin,
			tempertureMax: forecast.daily.data[0].temperatureMax,
			feelsLikeTemperature: forecast.currently.apparentTemperature,
			humidity: forecast.currently.humidity,
			windSpeed: forecast.currently.windSpeed,
			pressure: forecast.currently.presure,
		}

		result.daily = []
		for (let i = 0; i < forecast.daily.data.length; i++) {
			const dailyForecast = forecast.daily.data[i]
			result.daily[i] = {
				summary: dailyForecast.summary,
				icon: dailyForecast.icon,
				sunriseTime: dailyForecast.sunriseTime,
				sunsetTime: dailyForecast.sunsetTime,
				precipIntensity: dailyForecast.precipIntensity,
				precipProbability: dailyForecast.precipProbability,
				temperatureMin: dailyForecast.temperatureMin,
				temperatureMax: dailyForecast.temperatureMax,
				humidity: dailyForecast.humidity,
				windSpeed: dailyForecast.windSpeed,
				pressure: dailyForecast.pressure,
			}
		}

		return result
	}
}

module.exports = DarkSkyApiJsonConverter