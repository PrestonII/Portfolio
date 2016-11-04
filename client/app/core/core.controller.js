(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('coreController', coreController);

    coreController.$inject = ['$rootScope', '$scope', '$location', 'navigator', 'context']; 

    function coreController($root, $scope, $location, navigator, context) {
        /* jshint validthis:true */
        var vm = this;
        vm.page = {
            name: context.name,
            title: context.title
        }
        vm.showMenu = showMenu;

        initialize();

        $root.$on('onPageUpdate', updatePage);

        function initialize() {
            console.log('Loading Core Controller...');

            updateMain();
        }

        function updatePage() {
            vm.page.name = context.name;
            vm.page.title = context.title;

            console.log('Page was updated');
        }

        function updateMain() {
            console.log(context);
            console.log(navigator);
        }

        function showMenu() {
            //navigator.showMenu();
            console.log(navigator);
        }
    }
})();
