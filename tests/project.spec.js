/// <chutzpah_reference path="../node_modules/angular/angular.min.js" />
/// <chutzpah_reference path="../node_modules/angular-route/angular-route.min.js" />
/// <chutzpah_reference path="../node_modules/angular-mocks/angular-mocks.js" />
/// <chutzpah_reference path="../client/app/core/core.module.js" />
/// <chutzpah_reference path="../client/app/project/project.module.js" />
/// <chutzpah_reference path="../client/app/project/project.paging.js" />
/// <chutzpah_reference path="../client/app/project/project.controller.js" />

describe('Project Module', function () {
    var $controller, projectController;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('app.project'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
        projectController = $controller('projectController', {});
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