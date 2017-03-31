const request = require('request');
const API_KEY = `AIzaSyC0tw-FgBeIrwwIYl6pf5M_e7IqC92cfx4`

function getPlaces(req, res, next) {
  console.log(req.query)
  let { lat, long } = req.query;
  lat = lat || 39.7257155
  long = long || -104.9713034
  const BASE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1600&keyword=happyhour&pagetoken&key=${API_KEY}`


  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getPlaces: getPlaces
};
