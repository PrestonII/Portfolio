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
            $('#nav').fadeIn(250);
        };

    }
})();