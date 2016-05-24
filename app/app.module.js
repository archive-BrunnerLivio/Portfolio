'use strict';

/**
 * @ngdoc overview
 * @name angularBoilerplateApp
 * @description
 * # angularBoilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('angularBoilerplateApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angularBoilerplateApp.main'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        abstract: true,
        template: '<div ui-view></div>'
      });

  });