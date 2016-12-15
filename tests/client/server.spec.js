describe('Server', function () {
    var server;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('app.core'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_server_) {
        server = new _server_('testing');
    }));

    describe('on creation',
        function() {
            // A simple test to verify the Project Controller exists
            it('should exist',
                function() {
                    expect(server).toBeDefined();
                });

            // A simple test to verify the method all exists
            it('should be named "testing"',
                function () {
                    expect(server.serverType).toBeDefined();
                    expect(server.serverType).toBe('testing');
                });
        });

    // A set of tests for our Users.all() method
    describe('.getObjects()',
        function() {
            // A simple test to verify the method all exists
            it('should exist',
                function() {
                    expect(server.getObjects).toBeDefined();
                });




            //// A test to verify that calling all() returns the array of users we hard-coded above
            //it('should return a hard-coded list of users', function () {
            //    expect(Users.all()).toEqual(userList);
            //});
        });

    //// A set of tests for our Users.findById() method
    //describe('.findById()', function () {
    //    // A simple test to verify the method findById exists
    //    it('should exist', function () {
    //        expect(Users.findById).toBeDefined();
    //    });
    //});

});