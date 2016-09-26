export default angular.module('UberOpsApp')
.controller('loginController', ['$mdToast', '$mdDialog', '$rootScope', '$scope', '$http', function($mdToast, $mdDialog, $rootScope, $scope, $http) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  this.sendLoginForm = () => {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
      $http.post('/login',  $scope.form)
        .then((response) => {
          if(response.data.success) {
            $mdDialog.hide();
          } else {
            $mdToast.show(
              $mdToast.simple()
                .textContent(response.data.message)
                .position('top left')
                .hideDelay(3000)
            );
          }
          $rootScope.$emit('login:success', response.data.success);
        })
    }
  };


  
}]);