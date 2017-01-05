(function () {

    'use strict';

    angular
        .module('app.core')
        .factory('context', context);

    context.$inject = ['$rootScope'];

    function context($root) {

        console.log('Creating core context');

        var service = {
            currentPage: {
                name: 'Starting Up!',
                title: 'Loading...',
                borderColor: '',
                project: {
                    colorCode: 'proj-none'
                }
            },
            updatePage: updatePage,
            updatePageColor: updatePageColor,
            updatePageBorderColor: updatePageBorderColor,
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
            service.currentPage.borderColor = page.borderColor || '';
            // service.currentPage = page;

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

        function updatePageBorderColor(border){
        	if(border === null || border === undefined)
        		return service.currentPage.borderColor;

        	service.currentPage.borderColor = border;

        	$root.$broadcast('onPageUpdateBorder', service.currentPage.borderColor);

        	return service.currentPage.borderColor;
        }

        function resetPageColor() {
            var none = {
                colorCode: 'proj-none'
            };

            updatePageColor(none);
        }
    }
})();