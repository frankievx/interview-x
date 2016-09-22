var db = require('../db.js');


function getMatches(req, res) {
	return db.select().from('matches')
		.orderBy('match_date', 'desc')
		.then(function(matches) {
			res.json(matches);
		})
		.catch(function(err) {
			res.json({ success: false, message: "There has been an error when querying matches."})
		})
}



function addMatch(req, res) {
	if( req.session.email ) {
		var match = {
			home_team: req.body.home_team,
      away_team: req.body.away_team,
      home_score: req.body.home_score,
      away_score: req.body.away_score,
      match_date: req.body.match_date.slice(0,10)
		}
		return db('matches').insert(match)
			.then(function(success) {
				res.json({ success: true, message: 'You have added a new soccer match!'});
			})
			.catch(function(err) {
				res.json({ success: false, message: 'There has been an error when adding a new match.'});
			})
	} else {
		res.json({ success: false, message: 'Please login in order to add matches'});
	}
}

module.exports = {
	getMatches: getMatches,
	addMatch: addMatch
}