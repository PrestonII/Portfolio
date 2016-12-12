(function() {
    'use strict';

    angular
        .module('app.project')
        .factory('pagingService', pagingService);

    function pagingService() {

        console.log('Loading Project Paging Service...');

        var service = {
            currentProject: {},
            previousProject: {},
            changeProject: changeProject,
            updatePageColor: updatePageColor,
            updatePageProject: updatePageProject,
            updateProjectImages: updateProjectImages
        }

        var sample = {
            title: 'Sample Project Titles',
            colorCode: 'proj-sample',
            backgroundcolor: {
                "R": 255,
                "G": 255,
                "B": 255
            },
            textcolor: {
                "R": 48,
                "G": 49,
                "B": 48
            },
            summary:
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
                'tus, vis, non dicaver untertante convenductu moluderis ilicaet aute, menteri, sedius, que',
            tags: [".NET", "Javascript", "HTML5", "CSS3"],
            currentContent: {
                currentItem: {
                    image: '',
                    caption:
                        'These are series of words about the image being shown above.' +
                        '\n' +
                        '\n' +
                        'Some of which have been programmed. Others which have not. ' +
                        'There are of course more words that could potentially be said but will, for now, be left unsaid.'
                }
            },
        };

        return service;

        function changeProject(project) {
            if (project === undefined || project === null)
                project = sample;

            // more stuff to do here
            //var pageJQ = $('#Works');
            //pageJQ.css('background-color', 'aqua');

            //var page = angular.element(document.querySelector('html'));
            var page = $('html');
            //page.fadeIn(1500,
            //        function () {
            //            $(this).css('background-color', 'aqua');
            //        });

            //page.queue(function() {
            //    //page.css('background-color', 'aqua').fadeIn(500);
                
            //});

            

            service.currentProject = project;

            return service.currentProject;
        }

        function updatePageColor() {
            
        }

        function updatePageProject() {
            
        }

        function updateProjectImages() {
            
        }
    }
})();