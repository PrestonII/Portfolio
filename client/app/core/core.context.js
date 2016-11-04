(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('context', context);

    context.$inject = ['$http', '$rootScope']; 

    function context($http, $root) {
        console.log('Creating Core Context');
        
        var service = {
            name: 'DEF',
            title: 'GHY',
            updatePage: updatePage
        }

        return service;

        function updatePage(page) {

            service.name = page.name || '';
            service.title = page.title || '';

            $root.$broadcast('onPageUpdate', function() {
                console.log('Updating page information...');
            });
        }
    }
})();
