const chai = require('chai');
const sinon = require('sinon');
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
require('../../client/app/project/project.factory');
require('../../client/app/project/project.service.js');
require('../../client/app/project/project.controller');

describe('Project Controller', function(){
    "use strict";
    var $controller, projectController, projectHandler, context;
    var testProj = {
        title: 'TestingTitle',
        id: 0,
        colorCode: 'proj-test',
        summary: 'Summary of testing stuff',
        currentContent: {
            currentItem: {}
        },
        images: [
            {
                location: 'localhost/server/data/test/image.jpg',
                caption: 'A test image'
            }
        ]
    };

    beforeEach(function(){
        ngModule('app.core');
        ngModule('app.project');

        inject(function(_$controller_,_context_, _projectService_) {
            $controller = _$controller_;
            projectHandler = _projectService_;
            context = _context_;

            projectController = $controller('projectController',{
                context: context,
                pagingService: projectHandler
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

    it('should have sample projects at least, if not online', function(){
        var results;

        projectController.updateProjectList().then(function(response){
            console.log(response);
            results = response;
            expect(results).to.eventually.be.defined;
            expect(results[0].id).to.eventually.equal(0);
        });
    });

    describe('changeProject()', function(){
        it('should pick first project if no index', function() {
            projectController.page.projects = [];
            projectController.page.projects.push(testProj);
            projectController.changeProject();
            var currentProj = projectController.page.currentProject;

            expect(currentProj.id).not.to.be.equal(-1);
            expect(currentProj.title).not.to.be.equal('');
            expect(currentProj.summary).not.to.be.equal('');
            expect(currentProj.colorCode).not.to.be.equal('');
            expect(currentProj.images).not.to.be.equal([]);

            expect(currentProj.id).to.be.equal(0);
            expect(currentProj.title).to.be.equal('TestingTitle');
            expect(currentProj.summary).to.be.equal('Summary of testing stuff');
            expect(currentProj.colorCode).to.be.equal('proj-test');
            expect(currentProj.images[0].location).to.be.equal(testProj.images[0].location);
            expect(currentProj.images[0].caption).to.be.equal(testProj.images[0].caption);
        });

        it('should change the page color', function(){
            projectController.page.projects = [];
            projectController.page.projects.push(testProj);
            projectController.changeProject();
            var currentProj = projectController.page.currentProject;

            var result = projectController.page.currentProject.colorCode;

            expect(result).not.to.be.equal('');
            expect(result).not.to.be.equal(null);
            expect(result).to.be.equal('proj-test');
        });
    });

    describe('nextProject()', function() {
        it('should increment the project id', function () {

            projectController.updateProjectList()
                .then(function(response) {
                    console.log(response);
                    var currentId = projectController.page.currentProject.id;

                    projectController.nextProject();

                    var newId = projectController.page.currentProject.id;

                    expect(newId).to.eventually.be.above(currentId);
                    expect(newId).to.eventually.be.equal(1);
            });
        });

        it('should start at the beginning if it reaches end of projects', function () {
            var originalId = projectController.page.currentProject.id;

            projectController.page.projects = [];
            projectController.page.projects.push({id: 0});
            projectController.page.projects.push({id: 1});

            projectController.nextProject();
            projectController.nextProject();

            var newId = projectController.page.currentProject.id;

            expect(newId).to.be.above(originalId);

	        projectController.nextProject();
	        var finalId = projectController.page.currentProject.id;

	        expect(finalId).to.be.below(newId);
        });
    });

    describe('previousProject()', function() {
        it('should decrement the project id', function () {
	        var originalId = projectController.page.currentProject.id;

	        projectController.page.projects = [];
	        projectController.page.projects.push({id: 0});
	        projectController.page.projects.push({id: 1});

	        projectController.nextProject();
	        projectController.nextProject();

	        var newId = projectController.page.currentProject.id;

	        projectController.previousProject();
	        var finalId = projectController.page.currentProject.id;

	        expect(finalId).to.be.below(newId);
        });

        it('should head toward the final project if it decrements are negative', function () {
	        var originalId = projectController.page.currentProject.id;

	        projectController.page.projects = [];
	        projectController.page.projects.push({id: 0});
	        projectController.page.projects.push({id: 1});

	        projectController.nextProject();

	        var newId = projectController.page.currentProject.id;

	        expect(newId).to.be.above(originalId);

	        projectController.previousProject();
	        var finalId = projectController.page.currentProject.id;

	        expect(finalId).to.be.above(newId);
        });
    });

    describe('updatePage()', function(){
        it('should update current project', function() {
            // projectController.page.projects = [];
            //
            // projectController.updatePage();
	        projectController.initialize(test);

	        function test(){
	            var currentProj = projectController.page.currentProject;

	            expect(1).to.eventually.be.equal(0);
	            expect(currentProj.title).not.to.be.equal('');
	            expect(currentProj.summary).not.to.be.equal('');
	            expect(currentProj.colorCode).not.to.be.equal('proj-none');
	            expect(currentProj.images).not.to.be.equal([]);
	            expect(currentProj.title).not.to.be.equal('');
	        };
        });

        it('should change the page color', function(){
        	projectController.page.projects = [];
        	projectController.page.projects.push({
		        id: -1,
			        title: '',
			        summary: '',
			        borderColor: '',
			        colorCode: 'proj-test',
			        images: [],
	        });

            projectController.updatePage();
            var result = projectController.page.currentProject.colorCode;

            expect(result).not.to.be.equal('');
            expect(result).not.to.be.equal(null);
            expect(result).to.be.equal('proj-test');
        });
    });
});