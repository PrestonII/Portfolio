(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('coreController', coreController);

    coreController.$inject = ['$scope', '$location', 'navigator']; 

    function coreController($scope, $location, navigator) {
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
            updatePage();
            console.log('Initial content created.');
        }

        function updatePage(page) {
            if (page === null || typeof page === "undefined") {
                vm.page.name = 'About';
                vm.page.title = 'Preston';

                return;
            }

            vm.page.name = page.name;
            vm.page.title = page.title;



            console.log('Page was updated by a call from the "' + page.name + '" page');
        }

        function toggleMenu() {
            navigator.toggleMenu();
        }

        function navigateTo(identifier) {
            navigator.toggleMenu();
            var page = navigator.navigateTo(identifier);
            updatePage(page);
        }
    }
})();
