# Weather API
>This is the repository used during the development of the **'Weather API'**.

## Table of Contents
- [Description](#description)
- [Development](#development)
- [How to use](#how-to-use)
- [Author Info](#author-info)

## DESCRIPTION
**'Weather API'** is an api to get current weather for your city.

[Back To The Top](#weather-api)

## DEVELOPMENT
All files in this repository were developed using *Node.js v14.15.5*, and the following dependencies are needed to run the project:

    - axios: (v0.21.1): Promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node.js. 
    - dotenv (v8.2.0): A zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
    - express (v4.17.1): Used to provide server-side logic for web and mobile applications.
    - morgan (v1.10.0): HTTP request logger middleware for node.js.
    - swagger-ui-express: (v4.1.6): This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file.
    - winston: (v3.3.3): Designed to be a simple and universal logging library with support for multiple transports.    

[Back To The Top](#weather-api)

## HOW TO USE
It use the *City* model with four fields (*id*, *name*, *longitude* nad *latitude*) and the *Weather* model with also four fields (*description*, *temperature*, *temperatureMin* and *temperatureMax*).

It consists of the following *services*:

- **findCities**: Get a list of *Cities* with the city name provided. *(GET/cities/{city})*
- **weatherByCoordinates**: Get the current weather for the city coordinates provided. *(GET/weather/?longitude=value&latitude=value)*
- **weatherByCityId**: Get the current weather for the city name and id provided. *(GET/weather/{city}/{id})*

Check *documentation* of the API to see how it works.

[Back To The Top](#weather-api)
## AUTHOR INFO
- **Email**: adriansanchez88@gmail.com

- **LinkedIn**: [adrián-sánchez-nievares-50a310159](https://www.linkedin.com/in/adri%C3%A1n-s%C3%A1nchez-nievares-50a310159/)

[Back To The Top](#weather-api)