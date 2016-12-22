describe('Context', function () {
    var Context;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('app.core'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_context_) {
        Context = _context_;
    }));

    describe('on creation',
        function() {
            // A simple test to verify the Project Controller exists
            it('should exist',
                function() {
                    expect(Context).toBeDefined();
                });

            // A simple test to verify the Users factory exists
            it('should not be undefined',
                function() {
                    expect(Context).not.toBeUndefined();
                });

            // A simple test to verify the method all exists
            it('should be have an array called "currentPage"',
                function () {
                    expect(Context.currentPage).toBeDefined();
                });
        });

    // A set of tests for our Users.all() method
    describe('.updatePage()',
        function() {
            // A simple test to verify the method all exists
            it('should exist',
                function() {
                    expect(Context.updatePage).toBeDefined();
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