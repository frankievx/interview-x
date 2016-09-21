
export default angular.module('UberOpsApp')
  .controller('standingsController', ['$mdDialog', '$scope', '$http', function ($mdDialog, $scope, $http) {
    'use strict';
    
    var bookmark;
    
    $scope.selected = [];
    
    $scope.filter = {
      options: {
        debounce: 500
      }
    };

    $scope.query = {
      filter: '',
      limit: '5',
      order: 'nameToLower',
      page: 1
    };
    
    function success(matches) {
      console.log('success', matches);
      $scope.matches = matches.data;
    }
    
    $scope.addItem = function (event) {
      $mdDialog.show({
        clickOutsideToClose: true,
        controller: 'addItemController',
        controllerAs: 'ctrl',
        focusOnOpen: false,
        targetEvent: event,
        template: require('../templates/addMatchTemplate.html'),
      }).then($scope.getMatches);
    };
    
    
    $scope.getMatches = function () {
      $scope.promise = $http.get('/api/matches').then(success).$promise;
    };
    
    $scope.removeFilter = function () {
      $scope.filter.show = false;
      $scope.query.filter = '';
      
      if($scope.filter.form.$dirty) {
        $scope.filter.form.$setPristine();
      }
    };
    
    $scope.$watch('query.filter', function (newValue, oldValue) {
      if(!oldValue) {
        bookmark = $scope.query.page;
      }
      
      if(newValue !== oldValue) {
        $scope.query.page = 1;
      }
      
      if(!newValue) {
        $scope.query.page = bookmark;
      }
      
      $scope.getMatches();
    });
  }]);