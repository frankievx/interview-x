export default angular.module('UberOpsApp')
.controller('mainController', ['$mdToast', '$mdDialog', '$rootScope', '$scope', '$http', function($mdToast, $mdDialog, $rootScope, $scope, $http) {

  let bookmark;
  
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
  $scope.selected = [];
  $scope.pastMatches = [];
  $scope.liveMatches = [];
  $scope.futureMatches = [];
  $scope.message = '';
  $scope.admin = false;

  $rootScope.$on('login:success', (event, success) => $scope.admin = success);

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
  
  $scope.addItem = (event) => {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      template: require('../templates/addMatchTemplate.html'),
    }).then($scope.getMatches)
  };

  $scope.getMatches = function() {
    $http.get('/api/matches').then((matches) => {
      $scope.pastMatches = matches.data.filter(function(match) {
        let match_date = match.match_date.slice(0,10);
        let current = new Date()
        // current.setDate(current.getDate() - 1)
        current = current.toISOString().slice(0,10);
        return match.match_date < current;
      });

      $scope.liveMatches = matches.data.filter((match) => {
        let match_date = match.match_date.slice(0,10);
        let current = new Date()
        // current.setDate(current.getDate() - 1)
        current = current.toISOString().slice(0,10);
        return match_date == current;
      });

      $scope.futureMatches = matches.data.filter((match) => {
        let match_date = match.match_date.slice(0,10);
        let current = new Date()
        // current.setDate(current.getDate() - 1)
        current = current.toISOString().slice(0,10);
        return match_date > current;
      });
    })

    $rootScope.$applyAsync()
  }
  
  
  $scope.$watch('query.filter', (newValue, oldValue) => {
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