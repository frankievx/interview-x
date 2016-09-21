function config($compileProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  $compileProvider.debugInfoEnabled(false);
    
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: '/',
      template: require('./templates/nutritionTemplate.html'),
      controller: 'nutritionController',
      title: ''
    });
}

export default ['$compileProvider', '$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', config];