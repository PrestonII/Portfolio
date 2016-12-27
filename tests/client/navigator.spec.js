var chai = require('chai');
var sinon_chai = require('sinon-chai');
var chai_promises = require('chai-as-promised');
var assert = chai.assert;
var expect = chai.expect;
chai.use(sinon_chai);
chai.use(chai_promises);

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/core/core.navigator');

describe('Application Navigator', function () {
    var Navigator;

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(function(){
        ngModule('app.core');

        inject(function (_navigator_) {
            Navigator = _navigator_;
        });
    });


    describe('on creation',
        function() {
            // A simple test to verify the Project Controller exists
            it('should exist',
                function() {
                    expect(Navigator).to.be.defined;
                });
        });

    // A set of tests for our Users.all() method
    describe('.toggleMenu()',
        function() {
            // A simple test to verify the method all exists
            it('should exist',
                function() {
                    expect(Navigator.toggleMenu).to.be.defined;
                });
        });

    // A set of tests for our navigator findRoute method
    describe('.findRoute()', function () {
        // A simple test to verify the method findById exists
        it('should exist', function () {
            expect(Navigator.findRoute).to.be.defined;
        });

        it('should find "Works"', function () {
            var route = Navigator.findRoute('Works');

            expect(route).to.be.defined;
            expect(route.id).to.equal('Works');
        });

        it('should find "Home"', function () {
            var route = Navigator.findRoute('Home');

            expect(route).to.be.defined;
            expect(route.id).to.equal('Home');
        });

        it('should find "About"', function () {
            var route = Navigator.findRoute('About');

            expect(route).to.be.defined;
            expect(route.id).to.equal('About');
        });

        it('should find "News"', function () {
            var route = Navigator.findRoute('News');

            expect(route).to.be.defined;
            expect(route.id).to.equal('News');
        });
    });
});