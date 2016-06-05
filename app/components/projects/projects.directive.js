(function () {
    'use strict';

    /**
     * @name update
     * @description Updates the UI. This method handles the opacity
     * for the gradient backgrounds
     * @param {HTMLElement} element - the projects-component element
     */
    function update(element) {
        // variables
        var $projectsBackground = element.find('#projects-background'),
            $projectsTitle = element.find('#projects-title'),
            $document = $(document),
            $window = $(window),
            $projects = $('.project'),
            $timelineOverlay = element.find('#timeline-overlay'),
            elementBottom = element.offset().top + element.height();
        // if is in view    
        if ($window.scrollTop() < element.height() + element.offset().top) {
            element.addClass('active');
            $projectsBackground.css('opacity', 1 - ($document.scrollTop() - $projectsTitle.offset().top + $window.height()) / $projectsTitle.offset().top);

            $projects.each(function (index, project) {
                var $project = $(project),
                    $gradientBackground = $project.find('.gradient-background'),
                    //The calculation for the opacity of the background
                    opacity = 1 - ($document.scrollTop() - $project.offset().top + $window.height() - ($project.height() / 2)) / $project.offset().top;
                //To prevent white screen
                if (index !== $projects.length - 1) {
                    $gradientBackground.css('opacity', opacity);
                }

            });
            
            // fades the white overlay 
            var bottom = elementBottom + $window.height() / 2;
            if ($window.scrollTop() + $window.height() > elementBottom) {
                $timelineOverlay.css('opacity', ($window.scrollTop() + $window.height() - bottom) / ($window.scrollTop() + $window.height() * 1.5 - bottom) * 2);
            } else {
                $timelineOverlay.css('opacity', 0);
            }
        } else {
            element.removeClass('active');
        }

    }

    /**
     * @name link
     * @description Gets called when the projects directive is constructed
     * Updates the directive, everytime the 'scroll' or 'touchmove' event is fired.
     */
    function link(scope, element) {
        var $document = $(document);
        $document.scroll(function () {
            update(element);
        });
        $document.on('touchmove', function () {
            update(element);
        });
        update(element);
    }

    /**
     * @name projects
     * @description Config for the Directive
     * @returns {Object} directive configuration object
     */
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

    /**
     * @ngdoc directive
     * @name portfolio.projects.directive:projects
     * @restrict E
     * @scope
     * 
     * @description
     * The projects component. It is a section which presents
     * all projects from Livio.
     */
    angular
        .module('portfolio.projects')
        .directive('projects', projects);
})();