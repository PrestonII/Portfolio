(function() {
    'use strict';

    angular
        .module('app')
        .directive('directiveNav', directiveNav);

    directiveNav.$inject = ['$window'];
    
    function directiveNav ($window) {
        // Usage:
        //     <directive-nav></directive-nav>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'client/templates/nav.html',
            initialize: initialize
        };
        return directive;

        function link(scope, element, attrs) {
        }

        function initialize() {
            
        }
    }

})();