(function() {
    'use strict';

    angular
        .module('app')
        .config(router);

    router.$inject = ['$routeProvider', '$locationProvider'];

    function router($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', { templateUrl: 'client/app/home/testhome.html', controller: 'homeController', controllerAs: 'homeVm'})
            .otherwise('/');

        //$locationProvider.html5Mode(true);
    }

})();