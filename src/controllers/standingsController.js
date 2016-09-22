
export default angular.module('UberOpsApp')
  .controller('standingsController', ['$mdDialog', '$scope', '$http', function ($mdDialog, $scope, $http) {
    
    let bookmark;
    
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

    $scope.pastMatches = [];
    $scope.liveMatches = [];
    $scope.futureMatches = [];
    $scope.message = '';

    
    $scope.addItem = (event) => {
      $mdDialog.show({
        clickOutsideToClose: true,
        controller: 'addItemController',
        controllerAs: 'ctrl',
        focusOnOpen: false,
        targetEvent: event,
        template: require('../templates/addMatchTemplate.html'),
      }).then($scope.getMatches);
    };

    $scope.getMatches = function() {
      $scope.promise = $http.get('/api/matches').then((matches) => {

        $scope.pastMatches = matches.data.filter(function(match) {
          let match_date = match.match_date.slice(0,10);
          let current = new Date()
          current.setDate(current.getDate() - 1)
          current = current.toISOString().slice(0,10);
          return match.match_date < current;
        });

        $scope.liveMatches = matches.data.filter((match) => {
          let match_date = match.match_date.slice(0,10);
          let current = new Date()
          current.setDate(current.getDate() - 1)
          current = current.toISOString().slice(0,10);
          return match_date == current;
        });

        $scope.futureMatches = matches.data.filter((match) => {
          let match_date = match.match_date.slice(0,10);
          let current = new Date()
          current.setDate(current.getDate() - 1)
          current = current.toISOString().slice(0,10);
          return match_date > current;
        });
      }).$promise;
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