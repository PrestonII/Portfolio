﻿(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('aboutController', aboutController);

    

    aboutController.$inject = ['$scope','$location', 'navigator']; 

    function aboutController($scope, $location, navigator) {
        /* jshint validthis:true */
        var vm = this;
        var page = {
            name: 'About',
            title: 'Preston'
        }
        vm.page = {
            name: '',
            title: '',
            summary: {
                title: '',
                content: ''
            }
        }

        initialize();

        function initialize() {
            console.log('Loading About Controller...');

            addContent();
            addTitle();
        }
        
        function addTitle() {
            vm.page.name = 'About';
            vm.page.title = 'Preston';
            //context.updatePage(vm.page);
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
