﻿var assert = require('assert');
﻿var app = require('../../server/server.js');
﻿var jsonService = require('../../server/app/services/jsonService.js');

describe('Example Mocha Test: ', function () {


    it('Purposeful Pass', function() {
            assert.ok(true, "This shouldn't fail");
    });

    it('Purposeful Fail', function () {
        assert.ok(0 === 1, "This shouldn't fail");
    });

    it('Checking If I Can Find Server Files',
        function() {
            assert.ok(app !== undefined, "Server is defined");
            //expect(app).toBeDefined();
        });

    it('Adding third test',
        function () {
            assert.ok(app !== undefined, "Server is defined");
        });

    it('Purposeful Fail2', function () {
        assert.ok(0 === 1, "This shouldn't fail");
    });

    it('should fix all relative paths',
        function () {
            var testPath = './images/nimble/web1.jpg';
            var expectation = null;

            var result = jsonService.localizeFiles(projectData);

            assert.ok(expectation === result, 'This should fail');
        })

});