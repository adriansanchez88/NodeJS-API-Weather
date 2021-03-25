const WeatherRepository = require('../repositories/weatherRepository');
const weatherRepository = new WeatherRepository()
const CityRepository = require('../repositories/cityRepository');
const cityRepository = new CityRepository()

const weatherByCoordinates = async(longitude, latitude) => {
    const weather = await weatherRepository.weatherByCoordinates(longitude, latitude);
    return {
        description: weather.weather[0].description,
        temperature: weather.main.temp,
        temperatureMin: weather.main.temp_min,
        temperatureMax: weather.main.temp_max,        
    }
}

const weatherByCityId = async(city, id) => {
    const cities = await cityRepository.findCities(city);
    const cityData = cities.features.find(e => e.id === id);
    const longitude = cityData.geometry.coordinates[0];
    const latitude = cityData.geometry.coordinates[1];
    
    return weatherByCoordinates(longitude, latitude);
}

module.exports = {
    weatherByCoordinates,
    weatherByCityId
};