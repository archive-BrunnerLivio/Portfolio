'use strict';
function RoutesConfig($urlRouterProvider, $stateProvider) {

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<div ui-view></div>'
    });
    
  $urlRouterProvider.otherwise('/');

}
angular.module('portfolio.routes', [])
  .config(RoutesConfig);
/**
 * @ngdoc overview
 * @name portfolio
 * @description
 * # portfolio
 *
 * Main module of the application.
 */
angular
  .module('portfolio', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'pascalprecht.translate',
    'portfolio.routes',
    'portfolio.main',
    'portfolio.headerSection',
    'portfolio.aboutMe',
    'portfolio.projects'
  ])
  .config(function ($urlRouterProvider, $stateProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'translations/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
  });