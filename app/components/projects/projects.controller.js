(function () {
    'use strict';

    function ProjectsController() {
        var ctrl = this;
        
        var $projectsTitle = document.getElementById("projects-title");
        var rect = $projectsTitle.getBoundingClientRect();

        var position = {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
        ctrl.from = {
            projectsTitle : position.top
        };
        ctrl.to = {
            projectsTitle : position.top + 300
        };
    }

    angular
        .module('portfolio.projects')
        .controller('ProjectsController', ProjectsController);
})();