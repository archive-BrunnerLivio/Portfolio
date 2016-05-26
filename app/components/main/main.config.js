(function () {
    'use strict';

    function RouteConfig($stateProvider) {
        
        $stateProvider
            .state('app.main', {
                url: '/',
                templateUrl: 'components/main/main.view.html',
                controller: 'MainController',
                controllerAs: 'ctrl'
            });
    }
    
    angular.module('portfolio.routes')
        .config(RouteConfig);
        
    angular.module('portfolio.main', []);
})();
