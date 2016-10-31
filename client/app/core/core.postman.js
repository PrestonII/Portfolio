(function() {
    'use strict';

    angular
        .module('app.core')
        .factory("postman", postman);

    postman.$inject = ['$http'];

    function postman($http, type) {
        console.log('Creating postman');
        
        var objType = type;
        var postguy = {
            get: getStuff,
            create: createStuff,
            delete: deleteStuff
        }

        return postguy;

        function getStuff() {
            var url = String.concat('/api/' + objType);

            return $http.get(url)
                .success(showStuff)
                .error(tattleTell);
        };

        function createStuff( data ) {
            var url = String.concat('/api/' + objType, data);

            return $http.post(url)
                .success(showStuff)
                .error(tattleTell);
        };

        function deleteStuff( data ) {
            var url = String.concat('/api/' + objType + '/' + data._id);

            return $http.delete(url)
                .success(showStuff)
                .error(tattleTell);
        };

        function showStuff(response) {
            console.log(response);

            return response;
        };

        function tattleTell(error) {
            console.log( "There was an error - here's the data: " + error );
            return error;
        };
    }
})();