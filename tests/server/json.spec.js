///<reference path="../../server/app/services/jsonService.js" />

'use strict';
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
﻿var jsonService = require('../../server/app/services/jsonService.js');
var projectData =
{
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "Project Data",
    "description" : "Preston's preliminary project database. Try saying that 3 times fast :)",
    "type" : "object",
    "data" : [
    {
        "title" : "Nimble",
        "colorCode" : "proj-nimble",
        "summary" : "This is a project I've been thinking about for a long while.",
        "tags" : [".NET", "Javascript"],
        "images" : [
            {
                "location" : "./images/nimble/web1.jpg",
                "caption" : "Image of a thing"
            },
            {
                "location" : "./images/nimble/web2.jpg",
                "caption" : "Image of another thing"
            }
        ]
    }]
};

describe('JSON File Server', function () {

    it('should exist',
        function() {
            assert.ok(jsonService !== undefined, "Server is defined");
        });

    describe('localizeFiles()',
        function() {

            it('should exist',
                function() {
                    expect(jsonService.localizeFiles).to.exist;
                });

            it('should fix all relative paths',
                function() {
                    var testPath = './images/nimble/web1.jpg';
                    var expectation = null;

                    var result = jsonService.localizeFiles(projectData);

                    expect(1 - 1).to.equal(expectation);
                });

        });

    describe('localizePath()',
        function () {

            it('should exist',
                function () {
                    expect(jsonService.localizePath).to.exist;
                });

            it('should find file relative to its root',
                function () {
                    var testPath = './images/nimble/web1.jpg';
                    var expectation = 'A:/Work/Projects/Portfolio/server/data/images/nimble';

                    var result = jsonService.localizePath(projectData);

                    expect(result).to.equal(expectation);
                });

        });

});