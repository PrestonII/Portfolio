var chai = require('chai');
var sinon_chai = require('sinon-chai');
var chai_promises = require('chai-as-promised');
var assert = chai.assert;
var expect = chai.expect;
chai.use(sinon_chai);
chai.use(chai_promises);

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/core/core.processor');


describe('Processor', function(){
    var processor;
    var data = {};

    beforeEach(function(){
        ngModule('app.core');

        inject(function(_dataprocessor_){
            processor = _dataprocessor_;
        });
    });

    it('should exist', function(){
        expect(processor).to.be.defined;
    });

    it('should have all properties and methods', function(){
        expect(processor.currentData).to.be.defined;
        expect(processor.sanitize).to.be.defined;
        expect(processor.convertArray).to.be.defined;
        expect(processor.hasEscapes).to.be.defined;
        expect(processor.convertEscapeSequences).to.be.defined;
        expect(processor.localizeFile).to.be.defined;
    });

   describe('sanitize()',function(){

       // A simple test to verify the method all exists
       it('should convert "Feature/ \n Lines" to "Feature/ Lines"',
           function () {
               var title = ["Feature/", "\n", "Lines"];

               var processed = processor.sanitize(title);
               var expectation = "Feature/</br>Lines";

               expect(processed).to.be.equal(expectation);
           });
   });

    // A set of tests for our processor.convertArray() method
    describe('.convertArray()',
        function () {
            // A simple test to verify the method all exists
            it('should convert "Feature/ \n Lines" to "Feature/ Lines"',
                function () {
                    var title = ["Feature/", "\n", " Lines"];

                    var processed = processor.convertArray(title);
                    var expectation = "Feature/\n Lines";

                    expect(processed).to.be.equal(expectation);
                });
        });

    // A set of tests for our processor.convertArray() method
    describe('.hasEscapes()',
        function() {
            // A simple test to verify the method all exists
            it('should say that "Feature/ \n Lines" contains escapes',
                function() {
                    //var title = ["Feature/", "\n", " Lines"];
                    var item = "Feature/\n Lines";

                    var answer = processor.hasEscapes(item);

                    expect(answer).to.be.true;
                });
        });

    // A set of tests for our processor.convertArray() method
    describe('.convertEscapeSequences()',
        function () {
            // A simple test to verify the method all exists
            it('should change \n to </br>',
                function () {
                    //var title = ["Feature/", "\n", " Lines"];
                    var item = "Feature/\nLines";
                    var expectation = "Feature/</br>Lines";

                    var processed = processor.convertEscapeSequences(item);

                    expect(expectation).to.be.equal(processed);
                });
        });

});