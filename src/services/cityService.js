const CityRepository = require('../repositories/cityRepository');
const repository = new CityRepository()

const findCities = async(city) => {
    const cities = await repository.findCities(city);
    return cities.features.map(e=> {
        return {
            id: e.id,
            name: e.place_name,
            longitude: e.geometry.coordinates[0],
            latitude: e.geometry.coordinates[1],
        }
    });
}

module.exports = {
    findCities,
};
