module.exports = function () {
    var service = {
        convertToJSON: convertToJSON
    };
    return service;

    function convertToJSON(file) {
        var fs = require('fs');
        var path = require('path');
        var json = getConfig(file);
        return json;

        function getConfig(searchFile) {
            var filepath = path.join(__dirname, searchFile);
            return readJsonFileSync(filepath);
        }

        function readJsonFileSync(filepath, encoding) {
            if (typeof (encoding) === 'undefined') {
                encoding = 'utf8';
            }
            var item = fs.readFileSync(filepath, encoding);
            return JSON.parse(item);
        }
    }
};