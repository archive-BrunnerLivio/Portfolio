(function() {
'use strict';
    function NavigationItem(name, sectionId){
        this.name = name;
        this.sectionId = sectionId;
    }
    
    function NavigationItemFactory() {
        return NavigationItem;
    }
    
    /**
     * @ngdoc service
     * @name portfolio.navigation.service:NavigationItem
     * @param {string} name Name of the Navigation Item
     * @param {string} sectionId Id of the section, for example head (=#head).
     */
    angular
        .module('portfolio.navigation')
        .factory('NavigationItem', NavigationItemFactory);
})();