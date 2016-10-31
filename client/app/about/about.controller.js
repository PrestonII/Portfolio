(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('aboutController', aboutController);

    console.log('Loading About Controller...');
    aboutController.$inject = ['$location']; 

    function aboutController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.page = {
            name: '',
            summary: {
                title: '',
                content: ''
            },
            title: '',
        }

        initialize();

        function initialize() {
            addTitle();
            addContent();
        }
        
        function addTitle() {
            vm.page.name = 'About';
            vm.page.title = 'Preston';
        }

        function addContent() {
            vm.page.summary.title = 'Software Engineer';
            vm.page.summary.content =
                ' Hi, Im Preston.' +
                '\n' + '\n' +
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
