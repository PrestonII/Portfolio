(function() {

    'use strict';

    angular
        .module('app.core')
        .factory('dataprocessor', dataprocessor);

    function dataprocessor() {

        console.log('Creating data processor');

        var escapes =
            [
                {
                    "escape": "\n",
                    "html": "</br>"
                }
            ];

        var service = {
            currentData: {},
            escapeSequences : escapes,
            sanitize : sanitize,
            convertArray: convertArray,
            hasEscapes : hasEscapes
        }

        return service;

        function sanitize(data) {
            var originalData = data;

            if (data.isArray)
                data = convertArray(data);

            return data;
        }

        function convertArray(array) {
            var newObj = '';

            array.forEach(function(object) {
                newObj = newObj + object;
            });

            return sanitize(newObj);
        }

        function convertEscapeSequences(data) {

            if (escapes.some(areInData))
                return convertEscapeSequences();
            
            function areInData(item) {
                if (data.indexOf(item))
                    return true;

                return false;
            }

        }

        function hasEscapes(item) {

            var escapeSeq = Object.(escapes);

            escapeSeq.forEach(function(x) {
                if (item.indexOf(x))
                    return true;
            });

            return false;
        }
    }
})();