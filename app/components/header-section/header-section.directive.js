(function () {
    'use strict';



    function link() {

    }
    function headerSection() {
        var directive = {
            bindToController: true,
            controller: 'HeaderSectionController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            templateUrl: "components/header-section/header-section.template.html",
            replace: true,
            scope: {
            }
        };
        return directive;
    }

    angular
        .module('portfolio.headerSection')
        .directive('headerSection', headerSection);
})();