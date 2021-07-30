const request = require('postman-request');
const fs = require('fs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
// const url = 'http://api.weatherstack.com/current?access_key=da797e6b933c92d093551cf7736b2be0&query=37.8267,-122.4233&units=f'
// //http://api.weatherstack.com/current?access_key=da797e6b933c92d093551cf7736b2be0&query=37.8267,-122.4233

// request({url: url, json: true}, (error, response) => {
//     // console.log(response.body.current)

//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const weather = response.body.current;
//         console.log(`It is currently ${weather.temperature} degrees F out and it is ${weather.observation_time}.`);
//         console.log(`Today it is ${weather.weather_descriptions[0]}`)
//     }
// });

// //Geocoding
// //Address -> Lat/Long -> Weather

// CHALLENGE
// const latUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZWFsYXNhZ2FzIiwiYSI6ImNrcnA3c3RlbDA0ZWwydXBuZjRpMGZwN3QifQ.tPDVWN3BNrw7YO-3sOqrkQ&limit=1"

// request({url: latUrl, json: true}, (error,response) => {
//     if(error) {
//         console.log('Unable to connect to location service!')
//     } else if(response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search')
//     } else {
//         const lat = response.body.features[0].center[1];
//         const long = response.body.features[0].center[2]
//         console.log(`The Latitude is ${lat} and Longitude is ${long}`);
//     }
// });

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Enter City', data => {
const address = process.argv[2];
if(!address) {
    console.log('Please enter an address')
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return console.log(error);
        }
        // console.log('Data', data);
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        });
    })
}
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
