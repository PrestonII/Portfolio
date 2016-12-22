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

    beforeEach(function(){
        ngModule('app.core');

        inject(function(_context_){
            context = _context_;
        });
    });

    it('should exist', function(){
        expect(context).to.not.be.undefined;
    })
})