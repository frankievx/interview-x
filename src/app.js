import 'angular-animate';
import 'angular-aria';
import './app.css';
import './icons.css';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngResource from 'angular-resource';
import appConfig from './config.js';
// import nutritionController from './nutrition/nutritionController.js';

angular.module('UberOpsApp', [ require('angular-material-data-table'), ngMaterial, ngResource, uiRouter])
  .config(appConfig);

require('./controllers/addItemController.js');
require('./controllers/deleteController.js');
require('./controllers/standingsController.js');