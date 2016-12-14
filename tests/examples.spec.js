var assert = require('assert');

describe('Example Test Suite: ',
    function () {
        //var Users;

        //beforeEach(function() {

        //    angular.mock.module('api.users');
        //});

        //beforeEach(inject(function (_users_) {
        //    Users = _users_;
        //}));

        it('Purposeful Pass',
            function() {
                assert.ok(true, "This shouldn't fail");
            });

        it('Purposeful Fail',
            function() {
                assert.ok(1 === 1, "This shouldn't fail");
                assert.ok(false, "This should fail");
            });

        //it('Test 3',
        //    function () {
        //        assert.ok(Users !== undefined, "Shouldn't be undefined");
        //    });
    });
