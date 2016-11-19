(function () {
    'use strict';

    angular
        .module('app.project')
        .controller('projectController', projectController);

    

    projectController.$inject = ['$scope','$location', 'navigator', 'context']; 

    function projectController($scope, $location, navigator, context) {
        /* jshint validthis:true */
        var vm = this;
        vm.page = {
            name: 'Works',
            title: '',
            summary: {
                title: '',
                content: ''
            },
        }

        initialize();

        function initialize() {
            console.log('Loading Project Controller...');

            addContent();
            addTitle();
        }
        
        function addTitle() {
            context.updatePage(vm.page);
        }

        function addContent() {
            vm.page.summary.title = 'Nimble';
            vm.page.summary.content =
                ' This is a project called Nimble' +
                '\n' + '\n' +
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ' +
                '\n' +
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ' +
                '\n' +
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ' +
                '\n' +
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ' +
                '\n' + '\n' +
                ' Enient.Atiorerias aut aut ut pores nobitas nossequ aectatur, sequisint.' +
                ' Ullitatur solutas ea quibeati rerum ea nosam net aut iur aciae officidis' +
                ' re, ommodicabo.Us rempor repra volupis is milluptate veniend itatis cullace' +
                ' perumquat aut velenistius mi, volores totatur? Cilit eos pore nobit, sequat volorum' +
                ' volessi abor';
        }
    }
})();
