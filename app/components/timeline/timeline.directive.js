(function () {
    'use strict';

    function link(scope, element, attrs) {
    }
    
    function timeline() {
        var directive = {
            bindToController: true,
            controller: 'TimelineController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            templateUrl: 'components/timeline/timeline.template.html',
            replace: true,
            scope: {
            }
        };
        return directive;
    }
    angular
        .module('portfolio.timeline')
        .directive('timeline', timeline);
})();