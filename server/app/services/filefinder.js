module.exports = function fileFinder(stoppingPoint){

    var fs = require('fs');
    var path = require('path');
    var stopPath = normalizeStoppingPoint(stoppingPoint);

    var service = {
        findFile : findFile,
        getFiles : getFiles
    };

    return service;

    function findFile(file, currentLocation) {
        try {
            var fileAndExt = path.parse(file).base;
            var currentDir = currentLocation || __dirname;

            if (currentDir === stopPath)
                throw new RangeError('File either does not exist or is beyond defined threshold');

            var parentDir = path.dirname(currentDir);
            var files = getFiles(currentDir);
            var collection = {
                hasFile: false,
                allFiles: files
            };

            if (!collection.allFiles.some(isDirectory))
                return findFile(file, parentDir);

            for (var i = 0; i < collection.allFiles.length; i++) {
                var fileReview = collection.allFiles[i];

                if (isDirectory(fileReview)) {
                    addFiles(fileReview);
                    continue;
                }

                if (isFile(path.parse(fileReview).base))
                    return fileReview;
            }

            return findFile(file, parentDir);
        }

        catch(error){
            console.log(error);
        }

        function addFiles(currentDirectory) {
            try {
                var current = getFiles(currentDirectory);
                current.forEach(function(file) {
                    collection.allFiles.push(file);
                });
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
        function isFile(file) {
            try {
                return path.parse(file).base === fileAndExt;
            } catch (error) {
                throw error;
            }
        }
        function isDirectory(file) {
            try {
                var isDir = fs.statSync(file).isDirectory();
                return isDir;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    }

    function getFiles(directory) {
        try {
            var contents = fs.readdirSync(directory);
            var files = [];

            contents.forEach(function(file) {
                files.push(directory + "\\" + file);
            });

            return files;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    function normalizeStoppingPoint(filePath){
        var newPath = filePath  || path.join(__dirname, "../../../");

        if(newPath.endsWith("\\")){
            var point = newPath.lastIndexOf("\\");
            newPath = newPath.substring(0, point);
        }

        return newPath;
    }
};
