var db = require('../db.js');


function signup(req, res) {
	if( req.body.password != req.body.confirmpassword) {
		res.json({ success: false, message: 'Your passwords do not match.'})
	} else {
		var admin = { email: req.body.email, password: req.body.password };
		return db('admin').insert(admin)
			.then(function(success) {
				res.json({ success: true, message: 'Now please login using your new admin account.'})
			})
			.catch(function(err) {
				res.json({ success: false, message: "An error has occured during signup." });
			})
	}
}

function login(req, res) {
	return db.select().from('admin').where('email', '=', req.body.email)
		.then(function(admin) {
			if( admin[0].password === req.body.password) {
				req.session.email = req.body.email
				res.json({ success: true })
			} else {
				res.json({ success: false, message: 'Your password was incorrect' })
			}
		})
		.catch(function(err) {
			res.json({ success: false, message: 'There is no admin that has that email.'})
		})

}

function logout(req, res) {
	req.session.destroy(function(err) {
	  if(err) {
	    res.json({ success: false, message: "There has been an error during your process of logging out."})
	  } else {
	    res.json({ success: true, message: 'You have been logged out.'});
	  }
	});
}

module.exports = {
	login: login,
	logout: logout,
	signup: signup
}

