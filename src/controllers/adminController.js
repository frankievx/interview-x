export default angular.module('UberOpsApp').controller('adminController', ['$mdToast', '$mdDialog', '$rootScope', '$scope', '$http', function($mdToast, $mdDialog, $rootScope, $scope, $http) {


  $scope.admin = false;

  $scope.login = (event) => {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'loginController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      template: require('../templates/loginTemplate.html'),
    })
  };

  $rootScope.$on('login:success', (event, success) => $scope.admin = success);

  $scope.logout = (event) => {
    $http.get('/logout').then((response) => {
      if(response.data.success) {
        $scope.admin = false;
        $mdToast.show(
          $mdToast.simple()
            .textContent(response.data.message)
            .position('top left')
            .hideDelay(3000)
        );
      } else {
        $scope.admin = true;
        $mdToast.show(
          $mdToast.simple()
            .textContent(response.data.message)
            .position('top left')
            .hideDelay(3000)
        );
      }
    })
  };

  $scope.signup = (event) => {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'signupController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      template: require('../templates/signupTemplate.html'),
    })
  };
}]);