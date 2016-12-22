var chai = require('chai');
var sinon_chai = require('sinon-chai');
var chai_promises = require('chai-as-promised');
var assert = chai.assert;
var expect = chai.expect;
chai.use(sinon_chai);
chai.use(chai_promises);

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/core/core.context');
require('../../client/app/core/core.navigator');
require('../../client/app/core/core.server');
require('../../client/app/core/core.postman');

require('../../client/app/project/project.app');
require('../../client/app/project/project.paging');
require('../../client/app/project/project.controller');

describe('Project Controller', function(){
    "use strict";
    var $controller, projectController, $rootScope;

    beforeEach(function(){
        ngModule('app.core');
        ngModule('app.project');

        inject(function(_$controller_, _$rootScope_, _context_, _server_, _postman_, _pagingService_) {
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
                $scope: $scope,
                $location: $location,
                context: context,
                server: server,
                $http: $http,
                postman: postman,
                pagingService: pagingService
            });
        });
    });

    it('should exist', function(){
        expect(projectController).to.be.defined;
    })

    it('should have all properties and methods', function(){
        expect(projectController.page).to.be.defined;
        expect(projectController.page.projects).to.be.defined;
        expect(projectController.page.currentProject).to.be.defined;
        expect(projectController.getProjects).to.be.defined;
        expect(projectController.changeProject).to.be.defined;
        expect(projectController.updatePage).to.be.defined;
    })

    describe('changeProject()', function(){
        it('should update current project', function() {

            var currentProj = projectController.page.currentProject;

            expect(currentProj.title).not.to.be.equal('');
            expect(currentProj.summary).not.to.be.equal('');
            expect(currentProj.images).not.to.be.equal([]);
            expect(currentProj.title).not.to.be.equal('');
        });
    });

});