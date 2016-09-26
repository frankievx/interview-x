

export default angular.module('UberOpsApp')
.controller('addItemController', ['$mdToast','$mdDialog', '$scope', '$http', function ($mdToast, $mdDialog,  $scope, $http) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  this.addItem = function () {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
      $http.post('/api/addMatch',  $scope.match).then(success);
    }
  };
  
  function success(response) {
    if(response.data.success) {
      $mdDialog.hide();
    }
    $mdToast.show(
      $mdToast.simple()
        .textContent(response.data.message)
        .position('top left')
        .hideDelay(3000)
    );
  }
  
  
}]);