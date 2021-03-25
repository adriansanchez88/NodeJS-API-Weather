const dotenv = require('dotenv');
const envFound = dotenv.config();

if (!envFound) {
    throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: '/api/v1'
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/documentation'
    },
    mapbox: {
        pathBase: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
        apikey: process.env.MAPBOX_API_KEY || 'pk.eyJ1IjoiYWRyaWFuc2FuY2hlejg4IiwiYSI6ImNrbWtvY2QwMTEzMGIyb2s1NGdsbThrMmEifQ._e2ASWwDgTP33eJaqGDSUQ'
    },
    openweathermap: {
        pathBase: 'https://api.openweathermap.org/data/2.5/weather',
        apikey: process.env.OPENWEATHERMAP_API_KEY || 'df9f954306a200048efe0cd4c8f336b9'
    }
}