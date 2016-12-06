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
            name: 'Start',
            title: 'Loading...'
        }
        vm.toggleMenu = toggleMenu;
        vm.navigateTo = navigateTo;

        initialize();

        function initialize() {
            console.log('Loading Core Controller...');
            console.log('Creating initial content...');
            createContent();
            console.log('Initial content created.');
            //$root.$on('onPageUpdate', updatePage);
        }

        function createContent(scope, page) {
            if(page === null || typeof page === "undefined" )
                return;

            vm.page.name = page.name;
            vm.page.title = page.title;

            console.log('Page was updated by a call from the "' + page.name + '" page');
        }

        function updatePage(scope, page) {
            vm.page.name = context.name;
            vm.page.title = context.title;

            console.log('Page was updated by a call from the "' + page.name + '" page');
        }

        function toggleMenu() {
            navigator.toggleMenu();
        }

        function navigateTo(identifier) {
            navigator.toggleMenu();
            navigator.navigateTo(identifier);
        }
    }
})();
