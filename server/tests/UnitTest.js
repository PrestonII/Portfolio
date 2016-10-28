var assert = require('assert');

describe('Example Test Suite: ',
    function() {
        it('Test 1',
            function() {
                assert.ok(true, "This shouldn't fail");
            });

        it('Test 2',
            function() {
                assert.ok(1 === 1, "This shouldn't fail");
                assert.ok(false, "This should fail");
            });
    });
