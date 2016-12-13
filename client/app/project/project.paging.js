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
            updateProjectImages: updateProjectImages,
            getOfflineSamples : getOfflineSamples
        }

        var samples = [
                {
                title: 'Sample Project Titles',
                colorCode: 'proj-sample',
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
            },
            {
                title: 'Simulacra',
                colorCode: 'proj-simulacra',
                summary: 'Testing to see how text looks in WHITE'
            },
            {
                title: 'Feature/' + '\n' + 'Lines',
                colorCode: 'proj-assemble',
                summary: 'Testing to see how text looks in GREY'
            },
        ];

        return service;

        function changeProject(project) {
            if (project === undefined || project === null)
                project = samples[0];

            service.currentProject = project;

            return service.currentProject;
        }

        function getOfflineSamples() {
            return samples;
        }

        function updatePageColor() {
            
        }

        function updatePageProject() {
            
        }

        function updateProjectImages() {
            
        }
    }
})();