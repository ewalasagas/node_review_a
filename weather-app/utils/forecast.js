
const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=da797e6b933c92d093551cf7736b2be0&query=${longitude},${latitude}&units=f`

    request({url: url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 

                // time: response.body.current.observation_time,
                // temperature: response.body.current.temperature,
                // description: response.body.current.weather_descriptions[0]
         
                `It is currently ` 
                + body.current.temperature + ' degrees F out and it is ' + body.current.observation_time +
                `. Today is ` + body.current.weather_descriptions[0]
            )
        }
    })
}

module.exports = forecast;
