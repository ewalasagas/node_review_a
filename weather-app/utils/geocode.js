const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/encodeURIComponent(${address}).json?access_token=pk.eyJ1IjoiZWFsYXNhZ2FzIiwiYSI6ImNrcnA3c3RlbDA0ZWwydXBuZjRpMGZwN3QifQ.tPDVWN3BNrw7YO-3sOqrkQ&limit=1`
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback(`Unable to connect to location services!`, undefined)
        } else if(response.body.features.length === 0) {
            callback(`Unable to find location, try another search`, undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Seattle', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})

module.exports = geocode;