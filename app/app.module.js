'use strict';

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
    'portfolio.main'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        abstract: true,
        template: '<div ui-view></div>'
      });

  });