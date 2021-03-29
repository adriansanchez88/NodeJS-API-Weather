const express = require('express');
const Success = require('../helpers/successHandler');
const {
    weatherByCoordinates: weatherByCoordinatesService,
    weatherByCityId: weatherByCityIdService } = require('../services/weatherService');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const weatherByCoordinates = async (req, res, next) => {
    try {
        const {longitude, latitude} = req.query;
        const weather = await weatherByCoordinatesService(longitude, latitude);
        const success = new Success(weather);
        res.json(success);
    } catch (error) {
        next(error);        
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
 const weatherByCityId = async (req, res, next) => {
    try {
        const {city, id} = req.params;
        const weather = await weatherByCityIdService(city, id);
        const success = new Success(weather);
        res.json(success);
    } catch (error) {
        next(error);        
    }
};

module.exports = {    
    weatherByCoordinates,
    weatherByCityId
}