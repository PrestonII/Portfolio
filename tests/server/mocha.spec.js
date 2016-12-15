﻿var assert = require('assert');
﻿var app = require('../../server/server.js');

describe('Example Mocha Test: ', function() {

    it('Purposeful Pass', function() {
            assert.ok(true, "This shouldn't fail");
        });

    it('Checking If I Can Find Server Files',
        function() {
            assert.ok(app !== undefined, "Server is defined");
        });

    it('Adding third test',
        function () {
            assert.ok(app !== undefined, "Server is defined");
        });

});