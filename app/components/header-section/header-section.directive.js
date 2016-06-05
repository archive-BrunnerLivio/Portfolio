(function () {
    'use strict';
    
    /**
     * @name headerSection
     * @description Config for the Directive
     * @returns {Object} directive configuration object
     */
    function headerSection() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/header-section/header-section.template.html',
            replace: true,
            scope: {
            }
        };
        return directive;
    }
    
    /**
     * @ngdoc directive
     * @name portfolio.headerSection.directive:headerSection
     * @restrict E
     * @scope
     * 
     * @description
     * The header-section component. It is a section which presents
     * the main header of the site.
     */
    angular
        .module('portfolio.headerSection')
        .directive('headerSection', headerSection);
})();