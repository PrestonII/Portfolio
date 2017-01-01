var JSONFileService = function() {
    var fs = require('fs');
    var path = require('path');
    var thresholdPath = path.join(__dirname, "../../../");
    var filefinder = require('./filefinder')(thresholdPath);
    var service = {
        convertToJSON : convertToJSON,
        localizeFiles : localizeFiles,
        readJsonFileSync : readJsonFileSync,
        localizePath : localizePath,
        localizeProject : localizeProject
    };
    return service;

    function convertToJSON(file) {

        var json = getConfig(file);

        // var pathed = localizeFiles(json);

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

    function localizeFiles(database) {
        var file = database;

        for (var i = 0; i < file.data.length; i++) {
            var proj = file.data[i];

            proj = localizeProject(proj);

            file.data[i] = proj;
        }

        return file;
    }

    function localizeProject(file) {
        var proj = file;

        for (var i = 0; i < proj.images.length; i++) {
            var image = proj.images[i];

            image.location = localizePath(image.location);

            proj.images[i].location = image.location;
        }

        return proj;
    }

    function localizePath(filepath) {
        var location = filefinder.findFile(filepath);
        return location;
    }

    function convertArray(array) {
        var newObj = '';

        array.forEach(function(object) {
            newObj = newObj + object;
        });

        return newObj;
    }
};

module.exports = JSONFileService();
