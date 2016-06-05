(function () {
    'use strict';



    function link(scope, element) {
        var $window = $(window),
            $contactPortrait = element.find("#contact-portrait"),
            $contactBackground = element.find("#contact-background"),
            $paths = element.find("path"),
            hasUpdated = false;
        function updateTriangle() {
            var $window = $(window),
                portraitBounds = { x: $contactPortrait.offset().left, y: $contactPortrait.offset().top, width: $contactPortrait.width() - $contactPortrait.width() / 3, height: $contactPortrait.height() - $contactPortrait.height() / 3 };


            $paths.each(function (index, element) {
                var $path = $(element),
                    pathBounds = { x: $path.offset().left, y: $path.offset().top, width: $path.width(), height: $path.height() };

                if (pathBounds.x < portraitBounds.x + portraitBounds.width &&
                    pathBounds.x + pathBounds.width > portraitBounds.x &&
                    pathBounds.y < portraitBounds.y + portraitBounds.height &&
                    pathBounds.height + pathBounds.y > portraitBounds.y) {
                    window.setTimeout(function () {
                        $path.addClass("fadeOut");
                    }, Math.floor((Math.random() * 3000) + 1));
                } else {
                    $path.removeClass("fadeOut");
                }
            });
        }

        function onScroll() {
            // if is user in view
            if ($window.scrollTop() + $window.height() >= element.offset().top - 200) {
                element.addClass("active");

            } else {
                element.removeClass("active");
            }
            if ($window.scrollTop() + $window.height() >= element.offset().top + $contactPortrait.height() / 2) {
                //prevent unessesary calculations
                if (!hasUpdated) {
                    updateTriangle();
                    element.addClass("in-view");
                    hasUpdated = true;
                }
            }
        }
        $window.scroll(onScroll);
        $window.on('touchemove', onScroll);
        $window.resize(updateTriangle);
        updateTriangle();


    }
    function contact() {
        var directive = {
            bindToController: true,
            controller: 'ContactController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            templateUrl: 'components/contact/contact.template.html',
            replace: true,
            scope: {
            }
        };
        return directive;


    }

    /**
     * @ngdoc directive
     * @name portfolio.contact.directive:contact
     * @restrict E
     * @scope
     * 
     * @description 
     * The contact component. It is a section which presents
     * contact informations about Livio
     */
    angular
        .module('portfolio.contact')
        .directive('contact', contact);
})();