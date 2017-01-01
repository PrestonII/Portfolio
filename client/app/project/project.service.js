(function() {
    'use strict';

    angular
        .module('app.project')
        .factory('projectService', projectService);

    projectService.$inject = ['server', 'projectFactory'];

    function projectService(Server, ProjectFactory) {

        console.log('Loading Project Retrieval Service...');
        var projectServer = new Server('projects');
        var projectFactory;

        var service = {
            projects: [],
            getProjects : getProjects,
            getOfflineSamples : getOfflineSamples,
            processProjectData : processProjectData
        };

        var samples = [
            {
                title: ['Feature/', 'Lines'],
                colorCode: 'proj-assemble',
                summary: 'Testing to see how text looks in GREY'
            },
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
                images: [
                    {
                        caption: 'caption for image #1'
                    },
                    {
                        caption: 'caption for image #2'
                    },
                ]
            },
            {
                title: 'Simulacra',
                colorCode: 'proj-simulacra',
                summary: 'Testing to see how text looks in WHITE'
            },
        ];

        return service;

        function getOfflineSamples() {
            return processProjectData(samples);
        }

        function getProjects(){
            console.log('Getting projects from server...');

            return projectServer.getObjects()
                .then(processProjectData)
                .catch(getOfflineSamples);
        }

        function processProjectData(projectData){
            var projects = [];
            projectFactory = new ProjectFactory();

            projectData.forEach(function(proj){
                var processed = projectFactory.createProject(proj);
                projects.push(processed);
            });

            return projects;
        }
    }
})();