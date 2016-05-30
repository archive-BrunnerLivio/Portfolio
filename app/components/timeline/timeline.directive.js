(function () {
    'use strict';

    /**
     * @name link
     * @description Gets called when the timeline directive is constructed
     */
    function link() {
    }
    /**
     * @name timeline
     * @returns {Object} The configuration object for the timeline directive
     */
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
    /**
     * @ngdoc directive
     * @name portfolio.timeline.directive:timeline
     * @restrict E
     * @scope
     * 
     * @description
     * The portfolio component. It is a section which presents 
     * the timeline of Livio.
     */
    angular
        .module('portfolio.timeline')
        .directive('timeline', timeline);
})();