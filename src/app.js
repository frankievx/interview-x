import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import ngMaterial from 'angular-material';

import MainCtrl from './main/main.ctrl.js';
import appConfig from './config.js';

angular.module('UberOpsLeague', [ngMaterial, uiRouter])
  .controller('MainCtrl', MainCtrl)
  .config(appConfig);