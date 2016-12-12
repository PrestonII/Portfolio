(function () {
    'use strict';

    angular
        .module('app.project')
        .controller('projectController', projectController);

    projectController.$inject = ['$scope','$location', 'navigator', 'context', 'server', '$http', 'postman', 'pagingService']; 

    function projectController($scope, $location, navigator, context, Server, $http, postman, pagingService) {
        /* jshint validthis:true */
        var vm = this;
        var projects = [];
        var currentProject = {};
        var projectServer = new Server('projects');
        var pageHelper = pagingService;

        vm.page = {
            name: 'Works',
            title: '',
            projects: {
                currentProject: {
                    title: '',
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

        vm.changeProject = changeProject;

        initialize();

        function initialize() {
            console.log('Loading Project Controller...');

            //testing
            //var page = $('#page');
            //page.addClass('proj-simulacra');

            updatePage();
        }

        function updatePage() {
            if (projects.length <= 1)
                getProjects();

            context.updatePage(vm.page);

            vm.page.currentProject = pageHelper.changeProject(projects[0]);

            context.updatePageColor(vm.page.currentProject);
        }

        function changeProject(moveNext) {
            var simulacra = {
                colorCode : 'proj-simulacra'
            };

            var assemble = {
                colorCode : 'proj-assemble'
            };

            var project = moveNext === simulacra.colorCode ? simulacra : assemble;
            context.updatePageColor(project);

            // find position of current project

            //currentProject = moveNext
            //    ? changeProject(projects[pos + 1])
            //    : changeProject(projects[pos - 1]);
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

                    if (dbprojects.length > 0 && (vm.page.projects.currentProject.title === 'Sample Project Titles' || vm.page.projects.currentProject.title === ''))
                        vm.page.currentProject = projects[0];
                }

                console.log('Done.');
            }

            function logError(error) {
                console.log('There was an error attempting to retrieve projects: \n' + error);
            }
        }
    }
})();
