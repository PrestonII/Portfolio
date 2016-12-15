
describe('Project controller', function () {
    var $controller, projectController, $rootScope;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('app.core'));
    beforeEach(angular.mock.module('app.project'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_$controller_, _$rootScope_, _context_, _server_, _postman_, _pagingService_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        var $scope = $rootScope.$new();
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

    // A simple test to verify the method all exists
    it('should have projects',
        function () {
            expect(projectController.page.projects).toBeDefined();
        });

    // A set of tests for our Project.getProjects() method
    describe('.getProjects()',
        function() {
            // A simple test to verify the method all exists
            it('should exist',
                function () {
                    expect(projectController.getProjects).toBeDefined();
                });
        });

    //// A set of tests for our Users.findById() method
    //describe('.findById()', function () {
    //    // A simple test to verify the method findById exists
    //    it('should exist', function () {
    //        expect(Users.findById).toBeDefined();
    //    });
    //});

});