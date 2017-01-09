const chai = require('chai');
const expect = chai.expect;

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/core/core.postman');
require('../../client/app/core/core.server');
require('../../client/app/core/core.processor');

require('../../client/app/project/project.app');
require('../../client/app/project/project.factory');
require('../../client/app/project/project.service.js');

describe('Project Services', function(){
    "use strict";
    var service;

    beforeEach(function(){
        ngModule('app.core');
        ngModule('app.project');

        inject(function(_projectService_){
            service = _projectService_;
        });
    });

    it('should exist', function(){
        expect(service).to.exist;
        expect(service).to.be.defined;
    });

});