var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/places', controller.getPlaces)
router.get('/latlong', controller.getCoords)

module.exports = router;
