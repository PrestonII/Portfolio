(function () {

    'use strict';

    angular
        .module('app.core')
        .factory('context', context);

    context.$inject = ['$http', '$rootScope'];

    function context($http, $root) {

        console.log('Creating core context');

        var service = {
            currentPage: {
                name: 'Starting Up!',
                title: 'Loading...',
                pageColorCode: 'proj-none'
            },
            updatePage: updatePage,
            updatePageColor: updatePageColor,
            resetPageColor: resetPageColor
        }

        return service;

        function updatePage(page) {

            if (page === null || typeof page === "undefined") 
                return service.currentPage;
            
            service.currentPage.name = page.name || '';
            service.currentPage.title = page.title || '';

            $root.$broadcast('onPageUpdate', service.currentPage);

            console.log('Page parameters updated');
            return service.currentPage;
        }

        function updatePageColor(project) {
            if (project === null || project === undefined)
                return service.currentPage.pageColor;

            service.currentPage.pageColorCode = project.colorCode;

            $root.$broadcast('onPageUpdateColor', service.currentPage.pageColorCode);

            return service.currentPage.pageColorCode;
        }

        function resetPageColor() {
            var none = {
                colorCode: 'proj-none'
            };

            updatePageColor(none);
        }
    }
})();