(function() {
    'use strict';

    angular
        .module('app.core')
        .factory("postman", postman);

    postman.$inject = ['$http'];

    function postman($http) {

        var instance = function(objType) {
            var postguy = {
                objectType: objType,
                get: getStuff,
                create: createStuff,
                delete: deleteStuff
            }

            initialize();

            return postguy;

            function getStuff(useInternalStore) {
                if (useInternalStore === undefined || useInternalStore === null)
                    useInternalStore = true;

                var url = useInternalStore
                    ? '/api/' + objType + '/internal-store'
                    : '/api/' + objType;

                return $http.get(url)
                    .success(showStuff)
                    .error(tattleTell);
            };

            function createStuff(data) {
                var url = '/api/' + objType + data;

                return $http.post(url)
                    .success(showStuff)
                    .error(tattleTell);
            };

            function deleteStuff(data) {
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
                console.log("ERROR IN POSTING!");
                return error;
            };

            function initialize() {
                console.log('Creating "' + postguy.objectType + '" specific postman');
            }
        }

        return instance;
    }
})();