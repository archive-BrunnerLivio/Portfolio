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
    
  $urlRouterProvider.otherwise('/');

}
/**
 * ngdoc overview
 * @name portfolio.routes
 * @description
 * #portfolio.routes
 * Configuration for the applications routes
 */
angular.module('portfolio.routes', [])
  .config(RoutesConfig);