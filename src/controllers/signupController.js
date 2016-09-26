export default angular.module('UberOpsApp').controller('signupController', ['$mdToast', '$mdDialog', '$scope', '$http', function ($mdToast, $mdDialog,  $scope, $http) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  this.sendSignupForm = () => {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
      $http.post('/signup',  $scope.admin)
        .then(success)
        .catch(error)
    }
  };
  
  function success(response) {
    if(response.data.success) {
      $mdDialog.hide();
      $mdToast.show(
        $mdToast.simple()
          .textContent(response.data.message)
          .position('top left')
          .hideDelay(5000)
      );
    } else {
      $mdToast.show(
        $mdToast.simple()
          .textContent(response.data.message)
          .position('top left')
          .hideDelay(5000)
      );
    }
  }

  function error(err) {
    $scope.admin = false;
  }
  


  
}]);