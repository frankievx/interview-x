var path = require('path')
var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var apiRoutes = require('./routes/apiRoutes.js');


//Config
var app = express();
var apiRoutes = require('./routes/apiRoutes.js');
var webpackConfig = require('../webpack/config.dev.js');
var compiler = webpack(webpackConfig);
var db = require('./db.js');

// Start DB connection


//Body Parser and Webpack Middleware
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

app.use('/api', apiRoutes)



// app.get('*', function(req, res) {
// 	res.redirect('/');
// })



//Set Express to start listening to requests
app.listen(3000, () => console.log('listening on 3000'));