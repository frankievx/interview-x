function config( $mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: '/',
      template: require('./templates/standingsTemplate.html'),
      controller: 'standingsController',
      title: ''
    });
}

export default ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', config];