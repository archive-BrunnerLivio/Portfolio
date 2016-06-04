(function () {
    'use strict';
    function NavigationController(NavigationItem, $anchorScroll, $location) {
        var vm = this;
        vm.navigationItems = [
            new NavigationItem("home", "header-section"),
            new NavigationItem("who am i", "about-me"),
            new NavigationItem("projects", "projects"),
            new NavigationItem("timeline", "timeline"),
            new NavigationItem("contact", "contact")
        ];

        vm.scrollToAnchor = function (anchorId) {
            console.log(anchorId);
            if ($location.hash() !== anchorId) {
                $location.hash(anchorId);
            } else {
                $anchorScroll();
            }
        }
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