(function() {
    'use strict';

    angular
        .module('app')
        .directive('template_directive', template_directive);

    template_directive.$inject = ['$window'];
    
    function template_directive ($window) {
        // Usage:
        //     <template_directive></template_directive>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'client/templates/base.html',
            controller: 'templateController',
            controllerAs: 'vm'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();