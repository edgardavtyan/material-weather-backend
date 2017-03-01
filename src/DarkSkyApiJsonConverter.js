class DarkSkyApiJsonConverter {
	convert(forecast, address) {
		const result = {
			date: forecast.currently.time * 1000,
			location: address.location.replace('Kiev', 'Kyiv'),
			condition: forecast.currently.summary,
			dailySummary: forecast.daily.summary,
			todaySummary: forecast.hourly.summary,
			icon: forecast.currently.icon,
			precipChance: Math.round(forecast.currently.precipProbability * 100),
			temperature: forecast.currently.temperature,
			temperatureMin: forecast.daily.data[0].temperatureMin,
			temperatureMax: forecast.daily.data[0].temperatureMax,
			feelsLikeTemperature: forecast.currently.apparentTemperature,
			humidity: forecast.currently.humidity,
			windSpeed: forecast.currently.windSpeed,
			pressure: forecast.currently.presure,
		} // comment

		result.daily = []
		for (let i = 0; i < forecast.daily.data.length; i++) {
			const dailyForecast = forecast.daily.data[i]
			result.daily[i] = {
				date: dailyForecast.time * 1000,
				summary: dailyForecast.summary,
				icon: dailyForecast.icon,
				sunriseTime: dailyForecast.sunriseTime,
				sunsetTime: dailyForecast.sunsetTime,
				precipIntensity: dailyForecast.precipIntensity,
				precipProbability: Math.round(dailyForecast.precipProbability * 100),
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