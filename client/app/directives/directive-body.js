(function() {
    'use strict';

    angular
        .module('app')
        .directive('directiveBody', directiveBody);

    console.log('Loading body directive...');

    directiveBody.$inject = ['$window'];
    
    function directiveBody ($window) {
        // Usage:
        //     <directive-body></directive-body>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'client/templates/body.html',
            initialize : initialize
        };

        initialize();

        return directive;

        function link(scope, element, attrs) {
        }

        function initialize() {
            //findController();
        }

        //function findController($scope, $element) {
        //    console.log($scope);
        //    console.log($element);

        //    //directive.controller = $scope
        //}
    }

})();