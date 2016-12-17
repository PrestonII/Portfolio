

module.exports = function () {
    var fs = require('fs');
    var path = require('path');
    var service = {
        convertToJSON: convertToJSON,
        localizeFiles: localizeFiles,
        readJsonFileSync : readJsonFileSync
    };
    return service;

    function convertToJSON(file) {
        
        var json = getConfig(file);
        return json;

        function getConfig(searchFile) {
            var filepath = path.join(__dirname, searchFile);
            return readJsonFileSync(filepath);
        }
    }

    function readJsonFileSync(filepath, encoding) {
        if (typeof (encoding) === 'undefined') {
            encoding = 'utf8';
        }
        var item = fs.readFileSync(filepath, encoding);
        return JSON.parse(item);
    }

    function localizeFiles(data) {
        var conv = data;

        for (var i = 0; i < conv.length; i++) {
            var item = conv[i];

            conv[i] = localizePath(item);
        }
    }

    function localizePath(filepath) {
        var newpath = filepath;

        if (filepath.includes('./') || filepath.includes('../'))
            newpath = path.join(__dirname, filepath);

        return newpath;
    }

    function convertArray(array) {
        var newObj = '';

        array.forEach(function (object) {
            newObj = newObj + object;
        });

        return newObj;
    }
};