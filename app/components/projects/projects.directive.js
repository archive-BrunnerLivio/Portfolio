(function () {
    'use strict';



    function link() {
    }
    function projects() {
        var directive = {
            bindToController: true,
            controller: 'ProjectsController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            replace: true,
            templateUrl: 'components/projects/projects.template.html',
            scope: {
            }
        };
        return directive;


    }
    angular
        .module('portfolio.projects')
        .directive('projects', projects);
})();