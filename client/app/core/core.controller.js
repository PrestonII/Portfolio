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
            title: '',
            colorCode: ''
        }
        vm.toggleMenu = toggleMenu;
        vm.navigateTo = navigateTo;

        initialize();

        function initialize() {
            $root.$on('onPageUpdate', updatePage);
            $root.$on('onPageUpdateColor', updatePageColor);
            $root.$on('onPageUpdateBorder', updatePageBorderColor);
            console.log('Loading Core Controller...');
            console.log('Creating initial content...');
        }

        function updatePage($scope, page) {
            var current = page === undefined
                ? context.currentPage
                : page;
            
            vm.page.name = current.name;
            vm.page.title = current.title;
            // vm.page = current;

            console.log('Page was updated by a call from the "' + current.name + '" page');
        }

        function updatePageColor($scope, projectColorCode) {
            var color = projectColorCode === undefined
                ? 'proj-none'
                : projectColorCode;

            vm.page.colorCode = color;

            console.log('Page color has been updated.');
        }

        function updatePageBorderColor($scope, border){
        	if(border === null || border === undefined)
        		return;

        	vm.page.borderColor = border;

	        console.log('Border color has been changed to ' + border);
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
