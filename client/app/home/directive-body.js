(function() {
    'use strict';

    angular
        .module('app')
        .directive('directive_body', directive_body);

    directive_body.$inject = ['$window'];
    
    function directive_body ($window) {
        // Usage:
        //     <directive_body></directive_body>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();