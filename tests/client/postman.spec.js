var chai = require('chai');
var sinon = require('sinon');
var sinon_chai = require('sinon-chai');
var chai_promises = require('chai-as-promised');
var expect = chai.expect;
var should = chai.should;
chai.use(sinon_chai);
chai.use(chai_promises);
chai.should();

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/core/core.postman');

describe('Postman', function(){
    var postman, $httpbackend;
    var response_success = {
        data:[
            {userId: 'preston1'},
            {token: 'xxx'}
        ]
    };

    var response_error = {
        data: 'not found'
    };

    beforeEach(function(){
        ngModule('app.core');

        inject(function(_postman_, _$httpBackend_){
            postman = new _postman_('testing');
            $httpbackend = _$httpBackend_;
        });
    });

    it('should exist', function(){
        expect(postman).to.be.defined;
    });

    it('should have all methods and properties defined', function(){
        expect(postman.objectType).to.be.defined;
        expect(postman.get).to.be.defined;
        expect(postman.create).to.be.defined;
        expect(postman.delete).to.be.defined;
    });

    describe('get()', function(){
        afterEach(function(){
            $httpbackend.verifyNoOutstandingExpectation();
            $httpbackend.verifyNoOutstandingRequest();
        });

        it('should be able to retrieve from internal store by default', function(done){
            var expectation = {
                data: 'success!'
            };

            $httpbackend
                .when('GET', '/api/testing/internal-store')
                .respond(200, expectation);

            var response = postman.get();

            $httpbackend.flush();

            var result = response.$$state.value.data.data;
            done();

            expect(result).to.be.equal(expectation.data);
        });

        it('should be able to retrieve from database when called', function(done){
            var expectation = {
                data: 'success!'
            };

            $httpbackend
                .when('GET', '/api/testing')
                .respond(200, expectation);

            var response = postman.get(false);

            $httpbackend.flush();

            var result = response.$$state.value.data.data;
            done();

            expect(result).to.be.equal(expectation.data);
        });
    })
})