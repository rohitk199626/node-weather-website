const request = require('request')

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + decodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9oaXRrMjYiLCJhIjoiY2tlejkxdHJhMDJhcjJycWExY242ZTg1NCJ9.33NbpPg6a88-ph0Ioch1dQ&limit=1'

    request({url: geocodeURL, json: true}, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to Loacation Services!', undefined)
        } else if(body.message || body.features.length === 0) {
            callback('Unable to find location! Try another search')
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode