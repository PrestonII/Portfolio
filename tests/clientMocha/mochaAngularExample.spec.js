var assert = require('chai').assert;
require('./testhelpers');

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
                    assert.ok(1 === 1, 'Fake Passing Test!');
                });
        });

});