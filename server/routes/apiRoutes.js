var express = require('express');
var apiRoutes = express.Router();

var admin = require('../models/adminModel.js')
var matches = require('../models/matchesModel.js');



apiRoutes.get('/matches', matches.getMatches);


apiRoutes.post('/addMatch', matches.addMatch);


module.exports = apiRoutes;