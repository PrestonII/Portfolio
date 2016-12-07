(function() {

    'use strict';

    angular
        .module('app.core')
        .factory('context', context);

    context.$inject = ['$http'];

    function context($http) {

        console.log('Creating core context');

        var service = {
            currentPage: {
                name: '',
                title: ''
            },
            updatePage: updatePage
        }

        return service;

        function updatePage(page) {

            if (page === null || typeof page === "undefined") {

                service.currentPage.name = 'Loading...';
                service.currentPage.title = 'Starting Up';

                return service.currentPage;
            }

            service.currentPage.name = page.name || '';
            service.currentPage.title = page.title || '';

            console.log('Page parameters updated');
            return service.currentPage;
        }
    }
})();