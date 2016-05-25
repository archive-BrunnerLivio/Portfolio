(function () {
    'use strict';

    function HeaderSectionConfig($stateProvider) {
        $stateProvider.state('app.header', {
            url: '/header',
            templateUrl: 'components/main/main.view.html',
            controller: 'MainCntroller',
            controllerAs: 'ctrl'
        });
    }

    angular.module('portfolio.headerSection', [])
        .config(HeaderSectionConfig);

})();