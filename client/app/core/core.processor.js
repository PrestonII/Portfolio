(function() {

    'use strict';

    angular
        .module('app.core')
        .factory('dataprocessor', dataprocessor);

    function dataprocessor() {

        console.log('Creating data processor');

        var service = {
            currentData: {},
            sanitize : sanitize,
            convertArray: convertArray,
            hasEscapes: hasEscapes,
            convertEscapeSequences: convertEscapeSequences,
            localizeFile : localizeFile
        }

        var escapeSequences = [
            { key : "\n", value : "</br>" }
        ];

        return service;

        function sanitize(data) {
            var finalData = data;

            if (Array.isArray(finalData))
                finalData = convertArray(finalData);

            if (hasEscapes(finalData))
                finalData = convertEscapeSequences(finalData);

            return finalData;
        }

        function convertArray(array) {
            var newObj = '';

            array.forEach(function(object) {
                newObj = newObj + object;
            });

            return newObj;
        }

        function convertEscapeSequences(data) {

            escapeSequences.forEach(function(item) {
                data = data.replace(item.key, item.value);
            });

            if (hasEscapes(data))
                return convertEscapeSequences();

            return data;
        }

        function hasEscapes(item) {

            for (var i = 0; i < escapeSequences.length; i++) {
                var esc = escapeSequences[i].key;

                if (item.indexOf(esc) !== -1)
                    return true;
            }

            return false;
        }

        function localizeFile() {
            
        }
    }
})();