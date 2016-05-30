(function () {
    'use strict';
    
    /**
     * @name aboutMe
     * @description Config for the Directive
     * @returns {Object} directive configuration object
     */
    function aboutMe() {
        var directive = {
            bindToController: true,
            controller: 'AboutMeController',
            controllerAs: 'ctrl',
            templateUrl: 'components/about-me/about-me.template.html',
            restrict: 'E',
            replace: true,
            scope: {
            }
        };
        return directive;
    }
    
    /**
     * @ngdoc directive
     * @name portfolio.aboutMe.directive:aboutMe
     * @restrict E
     * @scope
     * 
     * @description
     * The about-me component. It is a section which presents
     * a small text about Livio.
     */
    angular
        .module('portfolio.aboutMe')
        .directive('aboutMe', aboutMe);

})();