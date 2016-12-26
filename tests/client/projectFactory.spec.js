const chai = require('chai');
const expect = chai.expect;

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/project/project.app');
require('../../client/app/project/project.factory');

describe('Project Factory', function(){
    "use strict";

    var projectFactory;

    beforeEach(function(){
        ngModule('app.project');

        inject(function(_projectFactory_){
            projectFactory = new _projectFactory_();
        });
    });

    it('should exist', function(){
        expect(projectFactory).to.be.defined;
    });

    it('should have all its methods and properties', function(){
       expect(projectFactory.createProject).to.exist;
       expect(projectFactory.createProject).to.be.defined;
       expect(projectFactory.idCounter).to.exist;
       expect(projectFactory.idCounter).to.be.defined;
    });

    describe('createProject()', function(){
        it('should increment IdCounter', function(){
            var project = projectFactory.createProject('TestingTitle');

            expect(project).to.be.defined;
            expect(projectFactory.idCounter).to.equal(1);
            expect(project.title).to.equal('TestingTitle');
        });

        it('should create separate instances', function(){
            var first = projectFactory.createProject('First Project');
            var second = projectFactory.createProject('Second Project');

            expect(first.id).to.equal(1);
            expect(second.id).to.equal(2);
            expect(first.id).not.to.be.equal(second.id);
        })
    });

});