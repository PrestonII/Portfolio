(function () {
    'use strict';

    angular
        .module('app.news')
        .controller('newsController', newsController);

    newsController.$inject = ['$scope','$location', 'navigator', 'context']; 

    function newsController($scope, $location, navigator, context) {
        /* jshint validthis:true */
        var vm = this;
        vm.page = {
            name: 'News',
            title: '',
            borderColor: '',
            summary: {
                title: '',
                content: ''
            }
        }

        var summary = {
            title : "The Title Of An Upcoming Article That You're Sure To Love.",
            content :
                'Coming Soon!!'
        };

        initialize();

        function initialize() {
            console.log('Loading News Controller...');

            context.resetPageColor();
            context.updatePageBorderColor(vm.page.borderColor);
            addContent();
            addTitle();
        }
        
        function addTitle() {
            context.updatePage(vm.page);
        }

        function addContent() {
            vm.page.summary.title = summary.title;
            vm.page.summary.content = summary.content;
        }
    }
})();
