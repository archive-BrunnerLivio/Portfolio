(function () {
    'use strict';

    function link() {
    }
    function aboutMe() {
        var directive = {
            bindToController: true,
            controller: 'AboutMeController',
            controllerAs: 'ctrl',
            link: link,
            templateUrl: 'components/about-me/about-me.template.html',
            restrict: 'E',
            replace: true,
            scope: {
            }
        };
        return directive;


    }

    angular
        .module('portfolio.aboutMe')
        .directive('aboutMe', aboutMe);

})();