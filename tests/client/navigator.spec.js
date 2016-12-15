///<reference path="../../client/app/core/core.navigator.js" />

describe('Navigator', function () {
    var Navigator;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('app.core'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_navigator_) {
        Navigator = _navigator_;
    }));

    describe('on creation',
        function() {
            // A simple test to verify the Project Controller exists
            it('should exist',
                function() {
                    expect(Navigator).toBeDefined();
                });

            // A simple test to verify the Users factory exists
            it('should not be undefined',
                function() {
                    expect(Navigator).not.toBeUndefined();
                });
        });

    // A set of tests for our Users.all() method
    describe('.toggleMenu()',
        function() {
            // A simple test to verify the method all exists
            it('should exist',
                function() {
                    expect(Navigator.toggleMenu).toBeDefined();
                });

            //// A test to verify that calling all() returns the array of users we hard-coded above
            //it('should return a hard-coded list of users', function () {
            //    expect(Users.all()).toEqual(userList);
            //});
        });

    // A set of tests for our navigator findRoute method
    describe('.findRoute()', function () {
        // A simple test to verify the method findById exists
        it('should exist', function () {
            expect(Navigator.findRoute).toBeDefined();
        });

        it('should find "Works"', function () {
            var route = Navigator.findRoute('Works');

            expect(route).toBeDefined();
            expect(route.id).toEqual('Works');
        });

        it('should find "Home"', function () {
            var route = Navigator.findRoute('Home');

            expect(route).toBeDefined();
            expect(route.id).toEqual('Home');
        });

        it('should find "About"', function () {
            var route = Navigator.findRoute('About');

            expect(route).toBeDefined();
            expect(route.id).toEqual('About');
        });

        it('should find "News"', function () {
            var route = Navigator.findRoute('News');

            expect(route).toBeDefined();
            expect(route.id).toEqual('News');
        });
    });
});