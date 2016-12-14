/// <chutzpah_reference path="../node_modules/angular/angular.js" />
/// <chutzpah_reference path="../node_modules/angular-mocks/angular-mocks.js" />
/// <chutzpah_reference path="../client/app/example/users.js" />

describe('Users Factory', function () {
    var Users;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('api.users'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_Users_) {
        Users = _Users_;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function () {
        expect(Users).toBeDefined();
    });

    // A simple test to verify the Users factory exists
    it('should not NOT exist', function () {
        expect(Users).not.toBeUndefined();
    });
});