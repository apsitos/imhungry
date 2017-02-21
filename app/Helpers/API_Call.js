const request = require ('request');
const API_KEY = AIzaSyC6g6LKNHk-ajRkQ-1t-AUDfHTjEP_aYBk
const BASE_URL =`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7392,-104.9903&radius=10&type=restaurant&key=${API_KEY}`

function getPlaces(req, res, next) {
  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getPlaces: getPlaces
};
