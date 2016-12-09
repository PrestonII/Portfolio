(function () {
    'use strict';

    angular
        .module('app.project')
        .controller('projectController', projectController);

    projectController.$inject = ['$scope','$location', 'navigator', 'context', 'server', '$http', 'postman']; 

    function projectController($scope, $location, navigator, context, Server, $http, postman) {
        /* jshint validthis:true */
        var vm = this;
        var projects = [];
        var projectServer = Server.initialize('projects');
        vm.page = {
            name : 'Works',
            title: '',
            projects: {
                currentProject : {
                    title : '',
                    summary: '',
                    currentContent: {
                        currentItem: {
                            image: '',
                            caption: ''
                        }
                    }
                }
            }
        };

        var sample = {
            title:
                'Sample Project Titles',
            summary :
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

        initialize();

        function initialize() {
            console.log('Loading Project Controller...');

            addTitle();
            if(projects.length <= 0)
                getProjects();

            addContent();
        }

        function addTitle() {
            context.updatePage(vm.page);
        }

        function addContent(project) {
            if (project === undefined || project === null)
                project = sample;

            vm.page.currentProject = project;
        }

        function getProjects() {
            console.log('Gettings projects from server...');
            projectServer.getObjects()
                .then(function(response) {
                    updateProjects(response);
                }, function(error) {
                     logError(error);
                });

            function updateProjects(dbprojects) {
                console.log('Updating page...');

                if (dbprojects !== undefined && dbprojects !== null) {
                    projects = dbprojects;

                    if (dbprojects.length > 0 && vm.page.projects.currentProject.title === 'Sample Project Titles')
                        vm.page.currentProject = projects[0];
                }

                console.log('Done.');
            }

            function logError(error) {
                console.log('There was an error here: \n' + error);
            }
        }
    }
})();
