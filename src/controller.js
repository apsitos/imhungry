const request = require('request');
const API_KEY = `AIzaSyC0tw-FgBeIrwwIYl6pf5M_e7IqC92cfx4`

function getPlaces(req, res, next) {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude
    const long = position.coords.longitude
    const BASE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1600&keyword=restaurant&pagetoken&key=${API_KEY}`
    request(BASE_URL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }
    })
  })
}



module.exports = {
  getPlaces: getPlaces
};
