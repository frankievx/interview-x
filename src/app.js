import 'angular-animate';
import 'angular-aria';
import 'angular-resource';
import './app.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import appConfig from './config.js';
// import nutritionController from './nutrition/nutritionController.js';

angular.module('UberOpsApp', [ require('angular-material-data-table'), ngMaterial, uiRouter])
  .config(appConfig);

require('./controllers/addItemController.js');
require('./controllers/deleteController.js');
require('./controllers/nutritionController.js');
require('./factories/authorizeFactory.js');
require('./factories/nutritionFactory.js');