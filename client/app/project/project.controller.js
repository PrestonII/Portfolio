///<reference path="project.paging.js" />

(function () {
    'use strict';

    angular
        .module('app.project')
        .controller('projectController', projectController);

    projectController.$inject = ['context', 'server', 'pagingService'];

    function projectController(context, Server, pagingService) {
        /* jshint validthis:true */
        var vm = this;
        var projectServer = new Server('projects');
        var pageHelper = pagingService;

        vm.page = {
            name: 'Works',
            title: '',
            transition: 'slowFade',
            projects: [],
            currentProject: {
                id: -1,
                title: '',
                summary: '',
                images: [],
                currentContent: {
                    currentItem: {
                        image: '',
                        caption: ''
                    }
                }
            }
        };

        vm.changeProject = changeProject;
        vm.updatePage = updatePage;
        vm.getProjects = getProjects;
        vm.nextProject = nextProject;
        vm.previousProject = previousProject;

        initialize();

        function initialize() {
            console.log('Loading Project Controller...');
            updatePage();
        }

        function updatePage() {
            if (vm.page.projects.length <= 1)
                getProjects();

            context.updatePage(vm.page);
            vm.page.currentProject =
                pageHelper.changeProject(vm.page.projects[0])
                    .then(context.updatePageColor(vm.page.currentProject));
        }

        // function changeProject(direction) {
        //
        //     // find position of current project
        //     var pos = vm.page.projects.indexOf(vm.page.currentProject);
        //     var i = direction === 'next'
        //                 ? (pos + 1)
        //                 : (pos - 1);
        //
        //     if (i >= vm.page.projects.length || i < 0) {
        //         console.log('Reached end of projects');
        //         return;
        //     }
        //
        //     var newProj = pageHelper.changeProject(vm.page.projects[i]);
        //     vm.page.currentProject = newProj;
        //     context.updatePageColor(vm.page.projects[i]);
        // }

        function nextProject(){
            var currentId = vm.page.currentProject.id;
            var next = currentId + 1;

            if(next > vm.page.projects.length)
                next = 0;

            var project = pageHelper.changeProject(vm.page.projects[next]);
            vm.page.currentProject = project;
            context.updatePageColor(project);
        }

        function previousProject(){
            var currentId = vm.page.currentProject.id;
            var previous = currentId - 1;

            if(previous < 0)
                previous = vm.page.projects.length;

            var project = pageHelper.changeProject(vm.page.projects[previous]);
            vm.page.currentProject = project;
            context.updatePageColor(project);
        }

        function getProjects() {
            console.log('Getting projects from server...');
            projectServer.getObjects()
                .then(updateProjects)
                .catch(function(error) {
                    logError(error);
                    var samples = pageHelper.getOfflineSamples();
                    updateProjects(samples);
                });

            function updateProjects(dbprojects) {
                console.log('Updating page...');
                pageHelper.changeProject(dbprojects[0]);
                console.log('Done.');
            }

            function logError(error) {
                console.log('There was an error attempting to retrieve projects: \n' + error);
            }
        }
    }
})();
