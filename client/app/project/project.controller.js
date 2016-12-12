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
            updatePage();
        }

        function updatePage() {
            if (projects.length <= 1)
                getProjects();

            context.updatePage(vm.page);

            vm.page.currentProject = pageHelper.changeProject(projects[0]);

            context.updatePageColor(vm.page.currentProject);
        }

        function changeProject(direction) {

            // find position of current project
            var pos = projects.indexOf(vm.page.currentProject);
            var i = direction === 'next'
                        ? (pos + 1)
                        : (pos - 1);

            if (i > projects.length || i < 0) {
                console.log('Reached end of projects');
                return;
            }

            var newProj = pageHelper.changeProject(projects[i]);
            vm.page.currentProject = newProj;
            context.updatePageColor(projects[i]);
        }

        function getProjects() {
            console.log('Gettings projects from server...');
            projectServer.getObjects()
                .then(function(response) {
                    updateProjects(response);
                })
                .catch(function(error) {
                    logError(error);
                    var samples = pageHelper.getOfflineSamples();
                    updateProjects(samples);
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
