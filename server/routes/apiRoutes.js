var express = require('express');
var session = require('express-session');
var uuid = require('uuid');
var apiRoutes = express.Router();

var admin = require('../models/adminModel.js')
var matches = require('../models/matchesModel.js');



apiRoutes.get('/matches', matches.getMatches);
apiRoutes.post('/addMatch', matches.addMatch);


module.exports = apiRoutes;