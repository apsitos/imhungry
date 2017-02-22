const request = require('request');
const API_KEY = `AIzaSyC0tw-FgBeIrwwIYl6pf5M_e7IqC92cfx4`
const BASE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7257155,-104.9713034&radius=1600&keyword=restaurant&pagetoken&key=${API_KEY}`
const COORDS_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=geocodeAddress`

function getPlaces(req, res, next) {
  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

function getCoords() {
  request(COORDS_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getPlaces: getPlaces,
  getCoords: getCoords
};
