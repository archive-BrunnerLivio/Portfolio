(function () {
    'use strict';
    /**
     * @name link
     * @description Gets called when the timeline directive is constructed 
     */
    function link(scope, element, attrs) {
    }
    /**
     * @name navigation
     * @returns {Object} The configuration object for the navigation directive
     */
    function navigation() {
        var directive = {
            bindToController: true,
            controller: 'NavigationController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            replace:true,
            templateUrl:'components/navigation/navigation.template.html'
        };
        return directive;
    }
    /**
     * @ngdoc directive
     * @name portfolio.navigation.directive:navigation
     * @restrict E
     * @scope
     * 
     * @description
     * The navigation component. The navigation is a fixed element, which helps the user to 
     * navigate through the application. It is located on the top left corner and it has a
     * fixed position. It also shows which section of the site you currently are.
     */
    angular
        .module('portfolio.navigation')
        .directive('navigation', navigation);
})();