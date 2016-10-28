(function() {
    'use strict';

    angular
        .module('app.core')
        .factory("postalService", postalService);

    postalService.$inject = ['$http'];

    function postalService($http) {
        console.log('Creating postman');

        var postMan = {
            get: getStuff,
            create: createStuff,
            delete: deleteStuff
        }

        return postMan;

        function getStuff() {
            return $http.get('/api/movies')
                .then(showStuff)
                .catch(tattleTell);
        };

        function createStuff(movieData) {
            return $http.post('/api/movies', movieData)
                .then(showStuff)
                .catch(tattleTell);
        };

        function deleteStuff(movieData) {
            return $http.delete('/api/movies', movieData)
                .then(showStuff)
                .catch(tattleTell);
        };

        function showStuff(response) {
            return response.data.results;
        };

        function tattleTell(error) {
            return error.data;
        };
    }

})();