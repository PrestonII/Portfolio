(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('coreController', coreController);

    coreController.$inject = ['$scope', '$location', 'navigator', 'context', '$rootScope']; 

    function coreController($scope, $location, navigator, context, $root) {
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
            $root.$on('onPageUpdate', updatePage);
            console.log('Loading Core Controller...');
            console.log('Creating initial content...');
        }

        function updatePage($scope, page) {
            var current = page === undefined
                ? context.currentPage
                : page;
            
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
            updatePage($scope, page);
        }
    }
})();
