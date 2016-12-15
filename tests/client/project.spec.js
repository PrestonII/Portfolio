
describe('Project controller', function () {
    var $controller, projectController;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('app.core'));
    beforeEach(angular.mock.module('app.project'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_$controller_, _context_, _server_, _postman_, _pagingService_) {
        $controller = _$controller_;
        var $scope = {};
        var $location = {};
        var context = _context_;
        var server = _server_;
        var $http = {};
        var postman = _postman_;
        var pagingService = _pagingService_;
        projectController = $controller('projectController',
        {
            $scope : $scope,
            $location : $location,
            context : context,
            server : server,
            $http : $http,
            postman : postman,
            pagingService : pagingService
        });
    }));

    // A simple test to verify the Project Controller exists
    it('should exist', function () {
        expect(projectController).toBeDefined();
    });

    //// A simple test to verify the Users factory exists
    //it('should not NOT exist', function () {
    //    expect(Users).not.toBeUndefined();
    //});

    //// A set of tests for our Users.all() method
    //describe('.all()',
    //    function() {
    //        // A simple test to verify the method all exists
    //        it('should exist',
    //            function() {
    //                expect(Users.all).toBeDefined();
    //            });

    //        // A test to verify that calling all() returns the array of users we hard-coded above
    //        it('should return a hard-coded list of users', function () {
    //            expect(Users.all()).toEqual(userList);
    //        });
    //    });

    //// A set of tests for our Users.findById() method
    //describe('.findById()', function () {
    //    // A simple test to verify the method findById exists
    //    it('should exist', function () {
    //        expect(Users.findById).toBeDefined();
    //    });
    //});

});