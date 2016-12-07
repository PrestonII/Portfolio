(function () {
    'use strict';

    angular
        .module('app.project')
        .controller('projectController', projectController);

    

    projectController.$inject = ['$scope','$location', 'navigator']; 

    function projectController($scope, $location, navigator) {
        /* jshint validthis:true */
        var vm = this;
        vm.page = {
            name: 'Works',
            title: '',
            summary: {
                title: '',
                content: ''
            }
        }

        initialize();

        function initialize() {
            console.log('Loading Project Controller...');

            addContent();
        }

        function addContent() {
            vm.page.summary.title = 'Nimble';
            vm.page.summary.content =
                ' This is a project called Nimble' +
                '\n' +
                '\n' +
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ' +
                
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ' +
                '\n' +
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ' +
                '\n' +
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ';
        }
    }
})();
