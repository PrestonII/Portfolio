(function () {

    'use strict';

    angular
        .module('app.core')
        .factory('navigator', navigator);

    navigator.$inject = ['$http', '$location'];

    function navigator($http, $location) {

        console.log('Creating navigator');

        var points =
        [
            {
                id: 'Home',
                name: 'Start',
                page: '/',
                title: 'Hi'
            },
            {
                id: 'About',
                name: 'About',
                page: '/',
                title: 'Preston'
            },
            {
                id: 'Works',
                name: 'Works',
                page: '/Works',
                title: ''
            },
            {
                id: 'News',
                name: 'News',
                page: '/News',
                title: ''
            }
        ];
        
        var nav = {
            toggleMenu: toggleMenu,
            navigateTo: navigateTo,
            findRoute : findRoute
        }

        return nav;

        function toggleMenu() {
            console.log('Attempting to show the menu...');
            var navMenu = $('#nav');
            var vis = navMenu[0].style.display;

            if(vis === 'none' || vis === ''){
                navMenu.fadeIn(750, function () {
                    console.log('Menu visible!');
                });
            }

            else{
                navMenu.fadeOut(750, function () {
                    console.log('Menu hidden!');
                });
            }
        }

        function navigateTo(identifier) {
            var itemToCheck = 
            !identifier.hasOwnProperty()
                ? identifier
                : identifier[0].innerText;

            var entry = findRoute(itemToCheck);
            var path = $location.path();

            if ($location.path() !== entry.page) {
                $location.path(entry.page);
            }

            console.log(entry.page);
            console.log($location.path());

            return entry;
        }

        function findRoute(check) {
            var routes = points;
            
            if(check.length > 0 && check[0].innerHTML)
                check = check[0].innerHTML;

            if(check.includes("."))
                check = check.replace(".", "");

            if (routes.some(hasEntry)) {
                for (var x in routes) {
                    if (routes.hasOwnProperty(x)) {
                        var item = routes[x];

                        if (item.id === check)
                            return item;
                    }
                }
            }

            throw new TypeError(check + " doesn't exist in our routes");
        }

        function hasEntry(entry) {
            return points.id === entry;
        }
    }
})();