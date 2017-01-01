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

        vm.initialize = initialize;
        vm.updatePage = updatePage;
        vm.updateProjectList = updateProjectList;
        vm.changeProject = changeProject;
        vm.getProjects = getProjects;
        vm.nextProject = nextProject;
        vm.previousProject = previousProject;
        vm.changeImage = changeImage;

        vm.page = {
            name: 'Works',
            title: '',
            transition: 'slowFade',
            projects: [],
            currentImage : {},
            currentProject: {
                id: -1,
                title: '',
                summary: '',
                colorCode: '',
                images: [],
            }
        };

        initialize();

        function initialize(callback) {
            console.log('Loading Project Controller...');
            updateProjectList()
                .then(function(response){
                    vm.page.projects = response;
                    updatePage();
                })
                .catch(function(error){
                    console.log(error);
                });

            if(vm.page.projects === Promise)
                vm.page.projects
                    .success(callback)
        }

        function updatePage(callback) {
            changeProject();            
            context.updatePage(vm.page);
            context.updatePageColor(vm.page.currentProject);

            if(callback)
                return callback();
        }

        function updateProjectList(){
            return getProjects();
        }

        function changeImage(index, callback){
        	if(!index || index === null || index === undefined)
        		index = 0;

        	vm.page.currentImage = vm.page.currentProject.images[index];

        	if(callback)
        		return callback();
        }

        function changeProject(index, callback) {
            if(!index || index === null || index === undefined)
                index = 0;

            vm.page.currentProject = vm.page.projects[index];
            context.updatePageColor(vm.page.currentProject);
            changeImage();

            if(callback)
                return callback();
        }

        function nextProject(){
            var currentId = vm.page.currentProject.id;
            var next = currentId + 1;

            if(next >= vm.page.projects.length)
                next = 0;

            changeProject(next);
        }

        function previousProject(){
            var currentId = vm.page.currentProject.id;
            var previous = currentId - 1;

            if(previous < 0)
                previous = vm.page.projects.length - 1;

            changeProject(previous);
        }

        function getProjects() {
            return projectHandler.getProjects();
        }
    }
})();
