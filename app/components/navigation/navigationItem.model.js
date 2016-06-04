(function() {
'use strict';
    function navigationItem(name, sectionId){
        
    }
    
    function navigationItemFactory() {
        return navigationItem;
    }
    
    /**
     * @ngdoc service
     * @name portfolio.navigation.service:navigationItem
     * @param {string} name Name of the Navigation Item
     * @param {string} sectionId Id of the section, for example #head.
     */
    angular
        .module('portfolio.navigation')
        .factory('navigationItem', navigationItemFactory);
})();