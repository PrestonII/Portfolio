(function() {
    'use strict';

    angular
        .module('app')
        .directive('directiveBase', directiveBase);

    console.log('Loading base directive...');

    directiveBase.$inject = ['$window'];

    function directiveBase ($window) {
        // Usage:
        //     <directive_base></directive_base>
        //     <div directive_base></div>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'client/templates/base.html',
            //controller: 'baseController',
            //controllerAs: 'vm'
        };

        return directive;

        function link($scope, element, attrs) {

            //console.log(navigator);

        }
    }

})();