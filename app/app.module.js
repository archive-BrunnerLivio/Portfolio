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
    'pc035860.scrollWatch',
    'ui.router',
    'pascalprecht.translate',
    'portfolio.main',
    'portfolio.headerSection'
  ])
  .config(function ($urlRouterProvider, $stateProvider, $translateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        abstract: true,
        template: '<div ui-view></div>'
      });

    $translateProvider.useStaticFilesLoader({
      prefix: 'translations/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
  });