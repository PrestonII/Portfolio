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

describe('Context Service', function(){
    var context;

    let newPage = {};

    beforeEach(function(){
        ngModule('app.core');

        inject(function(_context_){
            context = _context_;
        });

        newPage = {
            name: 'TestingPageName',
            title: 'TestingPageTitle',
            project: {
                colorCode: 'proj-test'
            }
        };
    });

    it('should exist', function(){
        expect(context).to.not.be.undefined;
    });

    // A simple test to verify the method all exists
    it('should be have all properties and methods',
        function () {
            expect(context.currentPage).to.be.defined;
            expect(context.updatePage).to.be.defined;
        });

    describe('updatePage()', function(){
        it('should update context properties', function() {
            context.updatePage(newPage);

            expect(context.currentPage.name).to.be.equal('TestingPageName');
            expect(context.currentPage.title).to.be.equal('TestingPageTitle');
            expect(context.currentPage.project.colorCode).to.be.equal('proj-test');
        });
    });

    describe('updatePageColor()', function(){
        it('should update page color', function() {
            context.updatePageColor(newPage.project);

            expect(context.currentPage.project.colorCode).to.be.equal('proj-test');
        });
    });

    describe('resetPageColor()', function(){
        it('should reset page color', function() {
            context.currentPage.project.colorCode = 'proj-test';

            context.resetPageColor();

            expect(context.currentPage.project.colorCode).to.be.equal('proj-none');
        });
    });
})