function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: '/',
      template: require('./main/main.html'),
      controller: 'MainCtrl',
      title: ''
    });
}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];