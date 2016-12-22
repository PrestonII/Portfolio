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

describe('Mocha + Angular Example', function () {

   var Context;

   beforeEach(function(){
       ngModule('app.core');

       inject(function(_context_) {
           Context = _context_;
       });
   });

    describe('#DoSomething',
        function() {
            it('should log the message "something done!"',
                function() {
                    // assert.ok(1 === 1, 'Fake Passing Test!');
                    expect(Context).to.not.be.undefined;
                });
        });

});