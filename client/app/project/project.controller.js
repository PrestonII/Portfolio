///<reference path="project.paging.js" />

(function () {
    'use strict';

    angular
        .module('app.project')
        .controller('projectController', projectController);

    projectController.$inject = ['$scope','$location', 'context', 'server', '$http', 'postman', 'pagingService']; 

    function projectController($scope, $location, context, Server, $http, postman, pagingService) {
        /* jshint validthis:true */
        var vm = this;
        var projectServer = new Server('projects');
        var pageHelper = pagingService;

        vm.page = {
            name: 'Works',
            title: '',
            transition: 'slowFade',
            projects: []
        };

        vm.changeProject = changeProject;
        vm.updatePage = updatePage;
        vm.getProjects = getProjects;

        initialize();

        function initialize() {
            console.log('Loading Project Controller...');
            updatePage();
        }

        function updatePage() {
            if (vm.page.projects.length <= 1) {
                getProjects();
            }
            
            context.updatePage(vm.page);
            vm.page.currentProject = pageHelper.changeProject(vm.page.projects[0]);
            context.updatePageColor(vm.page.currentProject);
        }

        function changeProject(direction) {

            // find position of current project
            var pos = vm.page.projects.indexOf(vm.page.currentProject);
            var i = direction === 'next'
                        ? (pos + 1)
                        : (pos - 1);

            if (i >= vm.page.projects.length || i < 0) {
                console.log('Reached end of projects');
                return;
            }

            var newProj = pageHelper.changeProject(vm.page.projects[i]);
            vm.page.currentProject = newProj;
            context.updatePageColor(vm.page.projects[i]);
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
                    vm.page.projects = dbprojects;

                    if (dbprojects.length > 0 && (vm.page.projects.currentProject.title === 'Sample Project Titles' || vm.page.projects.currentProject.title === ''))
                        vm.page.currentProject = vm.page.projects[0];
                }

                console.log('Done.');
            }

            function logError(error) {
                console.log('There was an error attempting to retrieve projects: \n' + error);
            }
        }
    }
})();
