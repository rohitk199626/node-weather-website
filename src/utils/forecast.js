const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const forecastURL = 'http://api.weatherstack.com/current?access_key=5a3f025675b6c9dc5d962620aac5f73f&query=' + latitude + ',' + longitude

    request({url: forecastURL, json: true}, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error) {
            callback('Unable to find Location!', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })

}


module.exports = forecast