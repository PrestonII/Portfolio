(function() {
    'use strict';

    angular
        .module('app')
        .directive('directiveBody', directiveBody);

    console.log('Loading body directive...');

    directiveBody.$inject = ['$window', 'context'];
    
    function directiveBody ($window, context) {
        // Usage:
        //     <directive-body></directive-body>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'client/templates/body.html',
            initialize: initialize,
            controller: 'coreController',
            controllerAs: 'vm'
        };

        initialize();

        return directive;

        function link(scope, element, attrs) {
        }

        function initialize() {

        }

        function refresh() {
            
        }
    }
})();