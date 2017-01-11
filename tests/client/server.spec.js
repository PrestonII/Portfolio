var chai = require('chai');
var sinon = require('sinon');
var sinon_chai = require('sinon-chai');
var chai_promises = require('chai-as-promised');
var expect = chai.expect;
chai.use(sinon_chai);
chai.use(chai_promises);

require('./testvariables');
require('../../client/app/core/core.app');
require('../../client/app/core/core.server');

describe('Server', function(){
    var server, $httpbackend;
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

        inject(function(_server_, _$httpBackend_){
            server =  new _server_('testing');
            $httpbackend =  _$httpBackend_;
        });
    });

    it('should exist', function(){

    });

    it('properties should all exist', function(){

    });

    it('and postman should point to the same api location', function(){

    });
});