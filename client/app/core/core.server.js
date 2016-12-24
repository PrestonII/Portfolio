/* 
This follows a modified version of the factory pattern proposed by John Papa
such that instances can be created without sacrificing the readability he's achieved.

See 'core.context' for a more typical JP Factory that will send out a Singleton.
*/
(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('server', server);

    server.$inject = ['$http', 'postman'];

    function server(http, Postman) {

        var instance = function(servType) {

            var self = {
                serverType: servType,
                objectList: [],
                currentObject: {},
                getObjects: getObjects,
                addObjects: addObjects,
                killObjects: killObjects
            }
            var postalService = new Postman(self.serverType);

            initialize();

            return self;

            function getObjects() {
                // reset the object list before retrieving
                self.objectList = [];

                return postalService.get()
                    .then(updateScope)
                    .catch(complain);
            }

            function addObjects() {
                var data = self.currentObject;
                console.log("i'll do it! I'll add the object called:");
                console.log(data);

                self.currentObject = {};

                return postalService.create(data)
                    .then(refreshScope)
                    .catch(complain);
            }

            function killObjects() {
                var data = self.currentObject;

                console.log("i'll do it! I'll kill the object!");
                console.log(data);

                self.currentObject = {};

                return postalService.delete(data)
                    .then(refreshScope)
                    .catch(complain);
            }

            function initialize() {
                console.log('Creating "' + self.serverType + '" specific server');
            }

            function reviewData(response) {
                console.log('Received data');

                if (response === null || response.length === 0)
                    console.log("There are no objects");

                console.log('Request complete');
                console.log(response);
            }

            function complain(error) {
                console.log( "There was an error retrieving items from the server");
                throw error;
            }

            function updateScope(response) {
                reviewData(response);

                if (response.data.length > 0) {
                    response.data.forEach(function(object) {
                        self.objectList.push(object);
                    });
                }

                return self.objectList;
            }

            function refreshScope() {
                return getObjects();
            }
        }

        return instance;
    };
})();