﻿(function() {
    'use strict';

    angular
        .module('app')
        .config(router);

    router.$inject = ['$routeProvider', '$locationProvider'];

    function router($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when('/', { templateUrl: 'client/app/about/about.view.html', controller: 'aboutController', controllerAs: 'vm'})
            .when('/Works', { templateUrl: 'client/app/project/project.view.html', controller: 'projectController', controllerAs: 'vm'})
            .when('/news', { templateUrl: 'client/app/app.view.html', controller: 'newsController', controllerAs: 'vm'})
            .otherwise('/');
    }
})();