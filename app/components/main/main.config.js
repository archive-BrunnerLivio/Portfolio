(function () {
    'use strict';

    function MainConfig($stateProvider) {
        
        $stateProvider
            .state('app.main', {
                url: '/',
                templateUrl: 'components/main/main.view.html',
                controller: 'MainController',
                controllerAs: 'ctrl'
            });
    }
    angular
        .module('portfolio.main', [])
        .config(MainConfig);
})();
