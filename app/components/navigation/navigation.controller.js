(function() {
'use strict';
    function NavigationController(navigationItem) {
        var vm = this;
        vm.navigationItems = {
            
        };
    }
    /**
     * @ngdoc controller
     * @name portfolio.navigation.directive:NavigationController
     * @description
     * Controller for the navigation-directive.
     */
    angular
        .module('portfolio.navigation')
        .controller('NavigationController', NavigationController);
})();