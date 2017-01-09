(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('aboutController', aboutController);

    aboutController.$inject = ['$scope','$location', 'navigator', 'context']; 

    function aboutController($scope, $location, navigator, context) {
        /* jshint validthis:true */
        var vm = this;
        vm.page = {
            name: 'About',
            title: 'Preston',
            borderColor: '',
            summary: {
                title: '',
                content: ''
            }
        }

        var summary = {
            title : 'Software Engineer',
            content :
                ' Hi, Im Preston.' +
                '\n' +
                '\n' +
                ' I create both desktop and web applications and particularly love working on projects related to the construction and design industry. ' +
                '\n' +
                '\n' +
                ' I’ve learned to broaden my skillset over my career and I’m proud to say that I truly can do a little bit of everything. From UX/UI design, to server side code to front-end design, I have a bit of experience all over.' +
                '\n' +
                '\n' +
                ' Check out the rest of my work using the navigator above! '

        };

        initialize();

        function initialize() {
            console.log('Loading About Controller...');

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
