///<reference path="project.paging.js" />

(function () {
    'use strict';

    angular
        .module('app.project')
        .controller('projectController', projectController);

    projectController.$inject = ['context', 'projectService'];

    function projectController(context, projectService) {
        /* jshint validthis:true */
        var vm = this;
        var projectHandler = projectService;

        vm.updatePage = updatePage;
        vm.updateProjectList = updateProjectList;
        vm.changeProject = changeProject;
        vm.getProjects = getProjects;
        vm.nextProject = nextProject;
        vm.previousProject = previousProject;

        vm.page = {
            name: 'Works',
            title: '',
            transition: 'slowFade',
            projects: [],
            currentProject: {
                id: -1,
                title: '',
                summary: '',
                colorCode: '',
                images: [],
                currentContent: {
                    currentItem: {
                        image: '',
                        caption: ''
                    }
                }
            }
        };

        initialize();

        function initialize() {
            console.log('Loading Project Controller...');
            vm.page.projects = updateProjectList()
                .then(updatePage);
        }

        function updatePage() {
            context.updatePage(vm.page);
            context.updatePageColor(vm.page.currentProject);
        }

        function updateProjectList(){
            if (vm.page.projects.length <= 1)
                return getProjects();
        }

        function changeProject(index) {
            if(!index || index === null || index === undefined)
                index = 0;

            vm.page.currentProject = projects[index];
            context.updatePageColor(vm.page.currentProject);
        }

        function nextProject(){
            var currentId = vm.page.currentProject.id;
            var next = currentId + 1;

            if(next > vm.page.projects.length)
                next = 0;

            changeProject(next);
        }

        function previousProject(){
            var currentId = vm.page.currentProject.id;
            var previous = currentId - 1;

            if(previous < 0)
                previous = vm.page.projects.length;

            changeProject(previous);
        }

        function getProjects() {
            return projectHandler.getProjects()
                    .then(changeProject);
        }
    }
})();
