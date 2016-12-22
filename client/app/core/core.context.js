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
                project: {
                    colorCode: 'proj-none'
                }
            },
            updatePage: updatePage,
            updatePageColor: updatePageColor,
            resetPageColor: resetPageColor
        }

        return service;

        function updatePage(page) {

            if (page === null || typeof page === "undefined") 
                return service.currentPage;

            if(page.project && page.project.colorCode)
                updatePageColor(page.project);

            service.currentPage.name = page.name || '';
            service.currentPage.title = page.title || '';

            $root.$broadcast('onPageUpdate', service.currentPage);

            console.log('Page parameters updated');
            return service.currentPage;
        }

        function updatePageColor(project) {
            if (project === null || project === undefined)
                return service.currentPage.project.colorCode;

            service.currentPage.project.colorCode = project.colorCode;

            $root.$broadcast('onPageUpdateColor', service.currentPage.project.colorCode);

            return service.currentPage.project.colorCode;
        }

        function resetPageColor() {
            var none = {
                colorCode: 'proj-none'
            };

            updatePageColor(none);
        }
    }
})();