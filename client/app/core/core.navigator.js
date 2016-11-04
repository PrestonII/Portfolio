(function() {
    'use strict';

    angular
        .module('app.core')
        .factory("navigator", navigator);

    navigator.$inject = ['$http'];

    function navigator($http) {
        console.log('Creating navigator');
        
        var nav = {
            showMenu: showMenu
        }

        return nav;

        function showMenu() {
            console.log('Attempting to show the menu...');
            var navMenu = $('#nav');
            //navMenu.fadeIn(1250);
            navMenu.fadeIn(250);

            console.log('Menu visible!');
        };

    }
})();