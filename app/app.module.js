'use strict';
/**
 * @name PortfolioConfig
 * @description 
 * Configures the portfolio application. 
 * Configures the translation settings.
 * @param {Object} $urlRouterProvider - The urlRouterProvider from AngularJS
 * @param {Object} $stateProvider - The $stateProvider from Angular UI Router
 * @param {Object} $translateProvider - The $translateProvider from ng translate
 */
function PortfolioConfig($urlRouterProvider, $stateProvider, $translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'translations/',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('en');
}
/**
 * @ngdoc overview
 * @name portfolio
 * @description
 * # portfolio
 *
 * Main module of the application. Loads all the submodules of the portfolio.
 * @requires ui.router
 * @requires pascalprecht.translate
 * @requires portfolio.routes
 * @requires portfolio.main
 * @requires portfolio.headerSection
 * @requires portfolio.aboutMe
 * @requires portfolio.projects
 * @requires portfolio.timeline
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
    'portfolio.projects',
    'portfolio.timeline'
  ])
  .config(PortfolioConfig);