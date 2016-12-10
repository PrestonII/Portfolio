(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('server', server);

    server.$inject = ['$http', 'postman'];

    function server(http, postman) {

        var postalService = {};
        var serverType = '';

        var service = {
            objectList: [],
            currentObject: {},
            serverType: serverType,
            initialize: initialize,
            getObjects: getObjects,
            addObject: addObject,
            killObject: killObject
        }

        return service;

        function initialize(type) {
            serverType = type;
            service.serverType = type;
            console.log('Creating "' + type + '" specific server');

            console.log('Passing type to postman');
            postalService = postman.initialize(type);

            return service;
        }

        function getObjects() {
            // reset the object list before retrieving
            service.objectList = [];

            return postalService.get()
                .then(updateScope)
                .catch(complain);
        }

        function addObject() {
            var data = service.currentObject;
            console.log("i'll do it! I'll add the object called:");
            console.log(data);
            
            service.currentObject = {};

            return postalService.create(data)
                .then(refreshScope)
                .catch(complain);
        }

        function killObject() {
            var data = service.currentObject;

            console.log("i'll do it! I'll kill the object!");
            console.log(data);
            
            service.currentObject = {};

            return postalService.delete(data)
                .then(refreshScope)
                .catch(complain);
        }

        function reviewData(response) {
            console.log('Received data');

            if (response === null || response.length === 0)
                console.log("There are no objects");

            console.log('Request complete');
            console.log(response);
        }

        function complain(error) {
            console.log( "There was an error: \n" + error);
        }

        function updateScope(response) {
            reviewData(response);

            if (response.data.length > 0) {
                response.data.forEach(function(object) {
                    service.objectList.push(object);
                });
            }

            return service.objectList;
        }

        function refreshScope() {
            return getObjects();
        }
    };
})();