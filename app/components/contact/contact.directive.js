(function () {
    'use strict';



    function link() {
    }
    function contact() {
        var directive = {
            bindToController: true,
            controller: 'ContactController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            templateUrl:'components/contact/contact.template.html',
            replace:true,
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