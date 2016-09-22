var path = require('path')
var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var session = require('express-session');
var uuid = require('uuid');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');



//Config
var app = express();
var admin = require('./models/adminModel');
var apiRoutes = require('./routes/apiRoutes.js');
var webpackConfig = require('../webpack/config.dev.js');
var compiler = webpack(webpackConfig);
var db = require('./db.js');
var secret = require('./secret.js').secret

//Body Parser and Webpack Middleware
app.use(session({ genid: function(req) { return uuid.v4() }, secret: secret, cookie: { maxAge: 600000 }}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV != "production") {
	app.use(webpackDevMiddleware(compiler, {
		publicPath: '/dist'
	}));
	app.use(webpackHotMiddleware(compiler));
}

//Static Route
app.use('/dist', express.static('dist'));

//Index Route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
});


app.post('/login', admin.login);
app.post('/signup', admin.signup);
app.get('/logout', admin.logout);
app.use('/api', apiRoutes)



// app.get('*', function(req, res) {
// 	res.redirect('/');
// })



//Set Express to start listening to requests
app.listen(3000, () => console.log('listening on 3000'));