/**
 * @name RoutesConfig
 * @description Configurates the applications routing
 */
function RoutesConfig($urlRouterProvider, $stateProvider) {

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<div ui-view></div>'
    });
    
  $stateProvider
    .state('app.main', {
      url: '/',
      templateUrl: 'components/main/main.view.html',
      controller: 'MainController',
      controllerAs: 'ctrl'
    });
  $urlRouterProvider.otherwise('/');

}
/**
 * @ngdoc overview
 * @name portfolio.routes
 * @description
 * # portfolio.routes
 * Configuration for the applications routes
 */
angular.module('portfolio.routes', [])
  .config(RoutesConfig);