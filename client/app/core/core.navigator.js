(function() {
    'use strict';

    angular
        .module('app.core')
        .factory("navigator", navigator);

    navigator.$inject = ['$http', '$location', '$timeout'];

    function navigator($http, $location, $timeout) {
        console.log('Creating navigator');

        var points = [
            {
                name: 'Home',
                page: '/',
                id: 'Home'
            },
            {
                name: 'About',
                page: '/',
                id: 'About'
            },
            {
                name: 'Works',
                page: '/Works',
                id: 'Works'
            },
            {
                name: 'News',
                page: '/News',
                id: 'News'
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
        };

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
            
            if(check.length > 0)
                check = check[0].innerHTML;

            if(check.includes("."))
                check = check.replace(".", "");

            if (routes.some(entry => entry.name === check)) {
                for (var x in routes) {
                    if (routes.hasOwnProperty(x)) {
                        var item = routes[x];

                        if (item.name === check)
                            return item;
                    }
                }
            }

            throw new TypeError(check + " doesn't exist in our routes");
        }

        function scrollPage(id) {

            $timeout(callAfterRenderingCompletes(function () {
                var idSelector = $("#" + id);

                if (!idSelector.offset()) {
                    console.log("Element doesn't exist yet");
                }

                $('body').animate({ scrollTop: idSelector.offset().top - 150 }, "slow");
            }), 0);
        }

        function callAfterRenderingCompletes(func) {
            if (typeof func !== 'function')
                throw new TypeError(func + ' is not a function');

            if ($http.pendingRequests.length > 0) {
                console.log('waiting to rendering to complete');
                $timeout(callAfterRenderingCompletes, 0);
            } else {
                func();
            }
        }
    }
})();