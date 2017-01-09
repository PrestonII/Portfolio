var jsdom = require('jsdom').jsdom;

global.document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = global.document.defaultView;
global.navigator = window.navigator = {};
global.Node = window.Node;

global.window.mocha = {};
global.window.beforeEach = beforeEach;
global.window.afterEach = afterEach;

/*
 * Angular Modules
 */
require('angular/angular');
require('angular-route');
require('angular-animate');
require('angular-mocks');

global.angular = window.angular;
global.inject = global.angular.mock.inject;
global.ngModule = global.angular.mock.module;

// /*
//  * Main Test Variables
//  */
// var jsdom = require('jsdom').jsdom;
// var chai = require('chai');
// var sinon_chai = require('sinon-chai');
// var chai_promises = require('chai-as-promised');
//
// global.importModules = function(moduleName) {
//     // Set up main area
//     global.document = jsdom('<html><head><script></script></head><body></body></html>');
//     global.window = global.document.defaultView;
//     global.navigator = window.navigator = {};
//     global.Node = window.Node;
//
//     // Set up testing area
//     global.expect = chai.expect;
//     global.assert = chai.assert;
//
//     chai.use(sinon_chai);
//     chai.use(chai_promises);
//
//     // Set up angular area
//     require('angular/angular');
//     require('angular-route');
//     require('angular-animate');
//     require('angular-mocks');
//
//     global.angular = window.angular;
//     global.inject = global.angular.mock.inject;
//     global.ngModule = global.angular.mock.module;
//
//     global.window.mocha = true;
//     global.window.beforeEach = beforeEach;
//     global.window.afterEach = afterEach;
//
//     if(angular && angular.mock){
//         if(moduleName) {
//             beforeEach(angular.mock.module(moduleName));
//         }
//
//         beforeEach(angular.mock.inject(function(_$controller_){
//             global.$ctrl = function(name, params){
//                 return _$controller_(name, params);
//             };
//         }));
//     }
// }
