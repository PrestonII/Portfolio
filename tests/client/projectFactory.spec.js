const chai = require('chai');
const expect = chai.expect;

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/core/core.processor');

require('../../client/app/project/project.app');
require('../../client/app/project/project.factory');

describe('Project Factory', function(){
    "use strict";

    var projectFactory, projectData, project;

    beforeEach(function(){
        ngModule('app.project');

        inject(function(_projectFactory_){
            projectFactory = new _projectFactory_();
        });

        projectData ={
            title: 'Project Data',
            data: {
                "title": [ "Feature/", "\n", "Lines" ],
                "colorCode": "proj-assemble",
                "summary": "One of my first experiments with both WebGL and intense client side Javascript.",
                "tags": [ ".NET", "Javascript", "WebGL" ],
                "images": [
                    {
                        "location": 'A:\\Work\\Projects\\Portfolio\\server\\data\\images\\example\\web1.jpg',
                        "caption": "Image of a thing"
                    },
                    {
                        "location": 'A:\\Work\\Projects\\Portfolio\\server\\data\\images\\example\\web2.jpg',
                        "caption": "Image of another thing"
                    }
                ]
            }
        };
        project = projectData.data;
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

    describe('data prep methods', function(){
        it('- sanitizeProjectData() - should prep all project data for HTML usage', function(){
            var result = projectFactory.sanitizeProjectData(project);
            var expectation = {
                title: 'Feature/</br>Lines',
                summary: 'One of my first experiments with both WebGL and intense client side Javascript.',
                colorCode: 'proj-assemble',
                tags: [ ".NET", "Javascript", "WebGL" ],
                images: [
                    {
                        location: 'A:/Work/Projects/Portfolio/server/data/images/example/web1.jpg',
                        caption: "Image of a thing"
                    },
                    {
                        location: 'A:/Work/Projects/Portfolio/server/data/images/example/web2.jpg',
                        caption: "Image of another thing"
                    }
                ]
            };

            expect(result.title).to.be.equal(expectation.title);
            expect(result.summary).to.be.equal(expectation.summary);
            expect(result.colorCode).to.be.equal(expectation.colorCode);
            expect(result.tags[0]).to.be.equal(expectation.tags[0]);
            expect(result.tags[1]).to.be.equal(expectation.tags[1]);
            expect(result.tags[2]).to.be.equal(expectation.tags[2]);
            expect(result.images[0].location).to.be.equal(expectation.images[0].location);
            expect(result.images[1].location).to.be.equal(expectation.images[1].location);
            expect(result.images[0].caption).to.be.equal(expectation.images[0].caption);
            expect(result.images[1].caption).to.be.equal(expectation.images[1].caption);
        });

        it('- convertTitle() - should clean project title', function(){
            var result = projectFactory.convertTitle(project.title);
            var expectation = 'Feature/</br>Lines';

            expect(result).to.be.equal(expectation);
        });

        it('- convertSummary() - should clean project summary', function(){
            var result = projectFactory.convertSummary(project.summary);
            var expectation = 'One of my first experiments with both WebGL and intense client side Javascript.';

            expect(result).to.be.equal(expectation);
        });

        it('- convertColor() - should leave color alone or assign if null', function(){
            var result = projectFactory.convertColor(project.colorCode);
            var expectation = 'proj-assemble';

            expect(result).to.be.equal(expectation);
            expect(result).not.to.be.equal(null);
        });

        it('- convertTags() - should leave tags alone', function(){
            var result = projectFactory.convertTags(project.tags);
            var expectation = [ ".NET", "Javascript", "WebGL" ];

            expect(result[0]).to.be.equal(expectation[0]);
            expect(result[1]).to.be.equal(expectation[1]);
            expect(result[2]).to.be.equal(expectation[2]);
        });

        describe('convertImages()', function(){
            it('should process nulls', function(){
                project.images = null;

                expect(projectFactory.convertImages).not.to.throw(Error);
            });

            it('should fix any strange image locations or captions', function(){
                var result = projectFactory.convertImages(project.images);
                var expectation = [
                    {
                        location: 'A:/Work/Projects/Portfolio/server/data/images/example/web1.jpg',
                        caption: "Image of a thing"
                    },
                    {
                        location: 'A:/Work/Projects/Portfolio/server/data/images/example/web2.jpg',
                        caption: "Image of another thing"
                    }
                ];

                expect(result[0].location).to.be.equal(expectation[0].location);
                expect(result[1].location).to.be.equal(expectation[1].location);
                expect(result[0].caption).to.be.equal(expectation[0].caption);
                expect(result[1].caption).to.be.equal(expectation[1].caption);
            });
        });
    });
});