/// <chutzpah_reference path="../node_modules/angular/angular.min.js" />
/// <chutzpah_reference path="../node_modules/angular-route/angular-route.min.js" />
/// <chutzpah_reference path="../node_modules/angular-mocks/angular-mocks.js" />
/// <chutzpah_reference path="../client/app/core/core.module.js" />
/// <chutzpah_reference path="../client/app/core/core.postman.js" />

describe('Postman', function () {
    var postman;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('app.core'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_postman_) {
        //$controller = _$controller_;
        //projectController = $controller('projectController', {});
        postman = new _postman_('testing');
    }));

    describe('on creation',
        function() {
            // A simple test to verify the Project Controller exists
            it('should exist',
                function() {
                    expect(postman).toBeDefined();
                });

            // A simple test to verify the Users factory exists
            it('should not be undefined',
                function() {
                    expect(postman).not.toBeUndefined();
                });

            // A simple test to verify the method all exists
            it('should be named "testing"',
                function () {
                    expect(postman.objectType).toBeDefined();
                    expect(postman.objectType).toBe('testing');
                });
        });

    // A set of tests for our Users.all() method
    describe('.get()',
        function() {
            // A simple test to verify the method all exists
            it('should exist',
                function() {
                    expect(postman.get).toBeDefined();
                });
        });
});