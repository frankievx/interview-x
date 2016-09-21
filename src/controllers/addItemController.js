

export default angular.module('UberOpsApp').controller('addItemController', ['$mdDialog', '$scope', '$http', function ($mdDialog,  $scope, $http) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  function success(match) {
    console.log('success');
    $mdDialog.hide(match);
  }
  
  this.addItem = function () {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
      $scope.match.match_date = $scope.match.match_date
      $http.post('/api/addMatch',  $scope.match).then(success);
    }
  };
  
}]);