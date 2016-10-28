(function() {
    'use strict';

    angular
        .module('app')
        .config(router);

    router.$inject = ['$routeProvider', '$locationProvider'];

    function router($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', { templateUrl: 'client/app/core/core.view.html', controller: 'coreController', controllerAs: 'coreVm'})
            .otherwise('/');

        //$locationProvider.html5Mode(true);
    }

})();