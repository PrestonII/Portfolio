var fileFinder = function(){

    var fs = require('fs');
    var path = require('path');

    var service = {
        findFile : findFile,
    };

    return service;

    function findFile(file, currentLocation){
        var fileAndExt = path.parse(file).base;
        var currentDir =  currentLocation || __dirname;
        var parentDir = path.dirname(currentDir);
        var files = getFiles(currentDir);
        var collection = {
            hasFile: false,
            allFiles: files
        };

        if(!collection.allFiles.some(isDirectory))
            return findFile(file, parentDir);

        for(var i = 0; i < collection.allFiles.length; i++){
            // var fileReview = path.parse(directory.allFiles[i]).base;
            var fileReview = collection.allFiles[i];

            if (isDirectory(fileReview)) {
                addFiles(fileReview);
                continue;
            }

            if(isFile(path.parse(fileReview).base))
                return fileReview;
        }

        return findFile(file, parentDir);

        function addFiles(currentDirectory){
            var current = getFiles(currentDirectory);
            current.forEach(function(file){
                collection.allFiles.push(file);
            });
        }
        function isFile(file){
            return path.parse(file).base === fileAndExt;
        }
        function isDirectory(file){
            var isDir = fs.statSync(file).isDirectory();
            return isDir;
        }
    }

    function getFiles(directory){
        var contents = fs.readdirSync(directory);
        var files = [];

        contents.forEach(function(file){
            files.push(directory + "\\" + file);
        })

        return files;
    }


};

module.exports = fileFinder();
