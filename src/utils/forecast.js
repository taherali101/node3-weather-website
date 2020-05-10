const request=require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=00c244ebe5923fd52ca4296eff1c8a38&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) +'&units=f'
    request({url,json: true}, (error, response) => {
      if (error) {
        callback('Unable to connect to weather Service!', undefined)
      } else if (response.body.error) {
        callback('unable to find location')
      } else {
         callback(undefined, response.body.current.weather_descriptions[0]  + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.feelslike + '% chance of rain.')
       }
    })
  }
  
  module.exports = forecast