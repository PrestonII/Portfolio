var chai = require('chai');
var sinon_chai = require('sinon-chai');
var chai_promises = require('chai-as-promised');
var assert = chai.assert;
var expect = chai.expect;
chai.use(sinon_chai);
chai.use(chai_promises);

require('../testvariables');

describe('Main Page', function(){
    var page;

    it('should exist', function(){
        browser.get('https://angularjs.org');
        // var result = browser.getTitle();
        element(by.model('todoList.todoText')).sendKeys('write first Protractor test');

        // expect(result).to.eventually.equal('PRESTON SMITH - Software Engineer');
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).to.equal(3);
        // expect(context).to.not.be.undefined;

    });

})