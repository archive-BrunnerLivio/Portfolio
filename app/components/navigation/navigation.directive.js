(function () {
    'use strict';

    /**
     * @name navigation
     * @returns {Object} The configuration object for the navigation directive
     */
    function navigation($location, $timeout) {
        /**
         * @name link
         * @description Gets called when the timeline directive is constructed 
         * Updates the location hash, while scrolling through the sections.
         */
        function link(scope) {
            // Updates hash when scroll through sections
            $timeout(function () {
                var $window = $(window);

                $window.scroll(update);
                $window.on('touchmove', update);

            });
            /**
             * @name update
             * @description if is over one section, it changes the url to the corresponding section
             * for example if the user is over the contact section, the url changes to #contact
             */
            function update() {
                var $window = $(window);
                $(scope.ctrl.navigationItems).each(function (index, navigationItem) {
                    var $section = $('#' + navigationItem.sectionId);
                    if ($section.offset() !== undefined) {
                        if ($window.scrollTop() + $window.height() > $section.offset().top + $window.height() / 2 &&
                            $window.scrollTop() + $window.height() < $section.offset().top + $section.height() + $window.height() / 2) {
                            history.pushState(null, null, '/#/' + navigationItem.sectionId);
                        }
                    }

                });
            }

        }
        var directive = {
            bindToController: true,
            controller: 'NavigationController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            replace: true,
            templateUrl: 'components/navigation/navigation.template.html'
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