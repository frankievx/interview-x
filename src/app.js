import 'angular-animate';
import 'angular-aria';
import './app.css';
import './icons.css';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngResource from 'angular-resource';
import appConfig from './config.js';

angular.module('UberOpsApp', [ require('angular-material-data-table'), ngMaterial, ngResource, uiRouter])
  .config(appConfig);

require('./controllers/addItemController.js');
require('./controllers/loginController.js');
require('./controllers/signupController.js');
require('./controllers/mainController.js');
