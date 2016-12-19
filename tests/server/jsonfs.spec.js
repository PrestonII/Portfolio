var assert = require('assert');
var jsonService = require('../../server/app/services/jsonService.js');

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

        it('should resolve relative paths',
            function () {
                var testPath = './images/nimble/web1.jpg';
                var expectation = null;

                var result = jsonService.localizeFiles(projectData);

                assert.ok(expectation === result, 'This should fail');
            });
    });