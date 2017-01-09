var assert = require('assert');
var expect  = require('chai').expect;
var path = require('path');
var jsonService = require('../../server/app/services/jsonService.js');
var projectData = require('../../server/data/projects.json');

describe('JSON File Service:',
    function () {

        it('should exist',
            function() {
                assert.ok(jsonService !== undefined, 'Service is defined');
            });
    });

describe('JSON File Service localizeFiles()',
    function() {

        it('should exist',
            function() {
                assert.ok(jsonService.localizeFiles !== undefined, 'localizeFiles is not defined');
            });

        // it('should resolve relative paths',
        //     function () {
        //         var expectation = null;
        //
        //         var result = jsonService.localizeFiles(projectData);
        //
        //         assert.ok(expectation === result, 'This should fail');
        //     });
    });

describe('JSON File Service localizeProject()',
    function() {

        it('should exist',
            function() {
                assert.ok(jsonService.localizeFiles !== undefined, 'localizeProject is not defined');
            });

        it('should resolve project relative paths',
            function () {
                var project = {
                    images: [
                        {location: './images/example/web1.jpg'},
                        {location: './images/example/web2.jpg'},
                        {location: './images/example/web3.jpg'},
                    ]
                };

                var expectation = {
                    images: [
                        { location: 'A:\\Work\\Projects\\Portfolio\\server\\data\\images\\example\\web1.jpg' },
                        { location: 'A:\\Work\\Projects\\Portfolio\\server\\data\\images\\example\\web2.jpg' },
                        { location: 'A:\\Work\\Projects\\Portfolio\\server\\data\\images\\example\\web3.jpg' },
                    ]
                };

                var result = jsonService.localizeProject(project);

                expect(expectation.images[0].location).to.be.equal(result.images[0].location);
                expect(expectation.images[1].location).to.be.equal(result.images[1].location);
                expect(expectation.images[2].location).to.be.equal(result.images[2].location);
            });
    });

describe('JSON File Service localizePath()',
    function () {

        it('should exist',
            function () {
                assert.ok(jsonService.localizePath !== undefined, 'localizePath is not defined');
            });

        it('should a relative based on the current directory',
            function () {
                var testPath = '../../data/images/example/web1.jpg';
                var expectation = 'A:\\Work\\Projects\\Portfolio\\server\\data\\images\\example\\web1.jpg';

                var result = jsonService.localizePath(testPath);

                // assert.ok(expectation === result, 'The path: "' + expectation + '" does not match the result: ' + result);
                expect(expectation).to.be.equal(result);
            });
    });

describe('JSON File Service convertToJSON()',
    function () {

        it('should exist',
            function () {
                assert.ok(jsonService.convertToJSON !== undefined, 'convertToJSON is not defined');
            });
    });