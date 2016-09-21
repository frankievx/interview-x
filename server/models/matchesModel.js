var db = require('../db.js');


function getMatches(req, res) {
	return db.select().from('matches')
		.then(function(success) {
			console.log('success', success);
			return res.json(success);
		})
		.catch(function(err) {
			console.log('Error getting matches', err)
		})
}


function addMatch(req, res) {
	console.log('match_date', req.body.match_date);
	req.body.match_date = req.body.match_date.substring(0,10);
	return db('matches').insert(req.body)
		.then(function(success) {
			console.log('success', success);
		})
		.catch(function(err) {
			console.log('Error adding match', err)
		})
}

module.exports = {
	getMatches: getMatches,
	addMatch: addMatch
}