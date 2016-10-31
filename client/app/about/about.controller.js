(function () {
    'use strict';

    angular
        .module('app')
        .controller('about', about);

    about.$inject = ['$location']; 

    function about($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'about';
        vm.page = {
            name: '',
            content: ''
        }

        activate();

        function activate() {
            addTitle()
            addContent();
        }
        
        function addTitle() {
            vm.page.name = ' About ';
        }

        function addContent() {
            vm.page.content =
                ' Hi, Im Preston.' +
                ' Sometimes I rhyme fast, sometimes I rhyme slow. ' + 
                ' Enient.Atiorerias aut aut ut pores nobitas nossequ aectatur, sequisint.' +
                ' Ullitatur solutas ea quibeati rerum ea nosam net aut iur aciae officidis' +
                ' re, ommodicabo.Us rempor repra volupis is milluptate veniend itatis cullace' +
                ' perumquat aut velenistius mi, volores totatur? Cilit eos pore nobit, sequat volorum' +
                ' volessi abor';
        }
    }
})();
