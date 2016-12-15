var assert = require('assert');

describe('Example Test Suite: ',
    function () {

        it('Purposeful Pass',
            function() {
                assert.ok(true, "This shouldn't fail");
            });

        //it('Purposeful Fail',
        //    function() {
        //        assert.ok(1 === 1, "This shouldn't fail");
        //        assert.ok(false, "This should fail");
        //    });
    });
