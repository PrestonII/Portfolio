const chai = require('chai');
const sinon_chai = require('sinon-chai');
const chai_promises = require('chai-as-promised');
const expect = chai.expect;
chai.use(sinon_chai);
chai.use(chai_promises);

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/core/core.context');
require('../../client/app/core/core.server');
require('../../client/app/core/core.postman');
require('../../client/app/core/core.processor');

require('../../client/app/project/project.app');
require('../../client/app/project/project.service.js');
require('../../client/app/project/project.controller');

describe('Project Controller', function(){
    "use strict";
    var $controller, projectController, $rootScope;

    beforeEach(function(){
        ngModule('app.core');
        ngModule('app.project');

        inject(function(_$controller_,_context_, _server_, _projectService_) {
            $controller = _$controller_;
            var context = _context_;
            var server = _server_;
            var pagingService = _projectService_;
            projectController = $controller('projectController',{
                context: context,
                server: server,
                pagingService: pagingService
            });
        });
    });

    it('should exist', function(){
        expect(projectController).to.be.defined;
    });

    it('should have all properties and methods', function(){
        expect(projectController.page).to.be.defined;
        expect(projectController.page.projects).to.be.defined;
        expect(projectController.page.currentProject).to.be.defined;
        expect(projectController.updatePage).to.be.defined;
        expect(projectController.updateProjectList).to.be.defined;
        expect(projectController.changeProject).to.be.defined;
        expect(projectController.getProjects).to.be.defined;
        expect(projectController.nextProject).to.be.defined;
        expect(projectController.previousProject).to.be.defined;
    });

    var testProj = {
        title: 'TestingTitle',
        colorCode: 'proj-test',
        summary: 'Summary of testing stuff',
        currentContent: {
            currentItem: {}
        },
        images: [
            {
                image: 'localhost/server/data/test/image.jpg',
                caption: 'A test image'
            }
        ]
    };

    describe('changeProject()', function(){
        it('should update current project', function() {
            var currentProj = projectController.page.currentProject;

            expect(currentProj.title).not.to.be.equal('');
            expect(currentProj.summary).not.to.be.equal('');
            expect(currentProj.images).not.to.be.equal([]);
            expect(currentProj.title).not.to.be.equal('');
        });

        it('should change the page color', function(){
            projectController.updatePage();
            var result = projectController.page.currentProject.colorCode;

            expect(result).not.to.be.equal('');
            expect(result).not.to.be.equal(null);
        });
    });

    describe('nextProject()', function() {
        it('should increment the project id', function () {
            var currentId = projectController.page.currentProject.id;

            projectController.nextProject();

            var newId = projectController.page.currentProject.id;

            expect(newId).to.be.above(currentId);
            expect(newId).to.be.equal(0);
        });

        it('should start at the beginning if it reaches end of projects', function () {
            var currentId = projectController.page.currentProject.id;

            projectController.nextProject();

            var newId = projectController.page.currentProject.id;

            expect(newId).to.be.above(currentId);
            expect(newId).to.be.equal(projectController.page.currentProject.length);
        });
    });

    describe('previousProject()', function() {
        it('should decrement the project id', function () {
            var currentId = projectController.page.currentProject.id;

            projectController.previousProject();

            var newId = projectController.page.currentProject.id;

            expect(newId).to.be.above(currentId);
            expect(newId).to.be.equal(projectController.page.currentProject.length);
        });

        it('should head toward the final project if it decrements are negative', function () {
            var currentId = projectController.page.currentProject.id;

            projectController.previousProject();

            var newId = projectController.page.currentProject.id;

            expect(newId).to.be.above(currentId);
            expect(newId).to.be.equal(projectController.page.currentProject.length);
        });
    });

    describe('updatePage()', function(){
        it('should update current project', function() {
            var currentProj = projectController.page.currentProject;

            expect(currentProj.title).not.to.be.equal('');
            expect(currentProj.summary).not.to.be.equal('');
            expect(currentProj.images).not.to.be.equal([]);
            expect(currentProj.title).not.to.be.equal('');
        });

        it('should change the page color', function(){

        });
    });
});