(function () {
    'use strict';


    function aboutMe() {
        var directive = {
            bindToController: true,
            controller: 'AboutMeController',
            controllerAs: 'ctrl',
            link: link,
            templateUrl:'components/about-me/about-me.template.html',
            restrict: 'E',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    
    angular
        .module('portfolio.aboutMe')
        .directive('aboutMe', aboutMe);

})();