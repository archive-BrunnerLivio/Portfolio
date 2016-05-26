(function () {
    'use strict';


    function update(element){
        var $projectsBackground = element.find("#projects-background"),
            $projectsTitle = element.find("#projects-title"),
            $document = $(document),
            $window = $(window),
            $projects = $(".project");
        $projectsBackground.css("opacity", 1 - ($document.scrollTop() - $projectsTitle.offset().top + $window.height()) / $projectsTitle.offset().top);
        
        $projects.each(function(index, project){ 
            var $project = $(project),
                $gradientBackground = $project.find(".gradient-background");
            $gradientBackground.css("opacity", 1 - ($document.scrollTop() - $project.offset().top + $window.height() - $project.height()) / $project.offset().top);
        });
    }
    
    function link(scope, element) {
        var $document = $(document);
        $document.scroll(function(){
            update(element);
        });
        update(element);
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