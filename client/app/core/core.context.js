(function() {

    'use strict';

    angular
        .module('app.core')
        .factory('context', context);

    context.$inject = ['$http', '$rootScope'];

    function context($http, $root) {

        console.log('Creating core context');

        var service = {
            currentPage: {
                name: 'Starting Up!',
                title: 'Loading...'
            },
            updatePage: updatePage
        }

        return service;

        function updatePage(page) {

            if (page === null || typeof page === "undefined") 
                return service.currentPage;
            
            service.currentPage.name = page.name || '';
            service.currentPage.title = page.title || '';

            $root.$broadcast('onPageUpdate', service.currentPage);

            console.log('Page parameters updated');
            return service.currentPage;
        }
    }
})();