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
            name : 'Works',
            title : '',
            summary : {
                title : '',
                content : ''
            }
        };

        var sample = {
            title : 'Sample Project',
            content :
                'Nos, manum, ut re nos nequa screi pon sendicas Cat, non res facchi, Cat, ' +
                'vervidetis. Lost pri portiorei pra ignatium antem unum serferis. Marions' +
                ' ulicontra consultum horeist ad dis, tatala nonemus vit; niam. mortum et reis. ' +
                '\n' +
                '\n' +
                'Gra pro, caecre, ut consunum dum dentem,Num inateatra, mo con vium publinte, nocular ' +
                'imodic obse facchicae tin verobus video, publin sentelis fure dum ' +
                'poendicae nostiam er publica peruntisquo ut Cupicav ereorbit quidiest? ' +
                'in teatil hos, nicauco nfecons ultorume ata, que addum reisEssenimu nterei ' +
                'es rei sessi sidicaes, urnimis senteris ad fuit. Nam medetio iae eterit; ium ' +
                'tus, vis, non dicaver untertante convenductu moluderis ilicaet aute, menteri, sedius, que'
        };

        initialize();

        function initialize() {
            console.log('Loading Project Controller...');
            
            addContent();
            addTitle();
        }

        function addTitle() {
            context.updatePage(vm.page);
        }

        function addContent(project) {
            if (project === undefined) {
                vm.page.summary.title = sample.title;
                vm.page.summary.content = sample.content;
                return;
            }

            vm.page.summary.title = project.title;
            vm.page.summary.content = project.content;
        }
    }
})();
