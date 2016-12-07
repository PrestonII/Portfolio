(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('coreController', coreController);

    coreController.$inject = ['$scope', '$location', 'navigator', 'context']; 

    function coreController($scope, $location, navigator, context) {
        /* jshint validthis:true */
        var vm = this;
        vm.page = {
            name: '',
            title: ''
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
            console.log($scope);

            var current = context.updatePage(page);

            vm.page.name = current.name;
            vm.page.title = current.title;

            console.log('Page was updated by a call from the "' + current.name + '" page');
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
