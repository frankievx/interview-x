angular.module('UberOpsApp').factory('$nutrition', ['$resource', function ($resource) {
  'use strict';

  return {
    desserts: $resource('https://infinite-earth-4803.herokuapp.com/nutrition/desserts/:id')
  };
}]);