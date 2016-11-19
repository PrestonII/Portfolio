(function() {
    'use strict';

    angular
        .module('app')
        .directive('directiveNavigable', directive_navigable);

    directive_navigable.$inject = ['$window'];
    
    function directive_navigable ($window) {
        // Usage:
        //     <directive_navigable></directive_navigable>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            controller: 'coreController',
            controllerAs: 'vm'
        };
        return directive;

        function link(scope, element, attrs, coreController) {
            element.ready(direct);

            function direct() {
                element.bind('click',function() {
                    coreController.navigateTo(element);
                });
            }
        }
    }

})();