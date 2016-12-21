///<reference path="../../server/app/services/filefinder.js" />

var assert = require('chai').assert;
var expect  = require('chai').expect;
var path = require('path');
var fs = require('fs');
var filefinder = require('../../server/app/services/filefinder');

describe('File Finder Service',
    function () {
        it('should exist', function () {
            expect(filefinder).to.be.defined;
        });
    });

describe('File Finder Service findFile()',
    function(){

        var thresholdPath = path.join(__dirname, "../../");

        it('should exist',
            function(){
                expect(filefinder.findFile).to.be.defined;
            });

        it('should have a realistic threshold', function(){
            console.log(thresholdPath);
            var thresholdExists = fs.statSync(thresholdPath);

           expect(thresholdExists).to.be.defined;
        });

        it("should throw an error if it can't find a file past a threshold", function(){
            var nonExistentFile = 'thing1.xls';
            var thresholdFF = require('../../server/app/services/filefinder')(thresholdPath);

            assert.throw(function(){
                thresholdFF.findFile(nonExistentFile);
            }, RangeError, 'File either does not exist or is beyond defined threshold');
        })

    });