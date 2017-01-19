///<reference path="./project.service.js" />

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
        vm.next = next;
        vm.previous = previous;
        vm.changeImage = changeImage;

        vm.page = {
            name: 'Works',
            title: '',
            transition: 'slowFade',
            borderColor: {},
            projects: [],
            currentImage : {},
            currentProject: {
                id: -1,
                title: '',
                summary: '',
	            borderColor: '',
                colorCode: '',
                images: [],
            }
        };

        initialize();

        function initialize(callback) {
            console.log('Loading Project Controller...');

            try {
                if(projectHandler.hasApiProjects){
                    vm.page.projects = projectHandler.projects;
                    updatePage();
                    return;
                }

                var promise = projectHandler.getProjects()

                promise.then(
                    function(response){
                        vm.page.projects = response;
                        updatePage(callback);
                    },
                    function(error){
                        console.log(error);
                        vm.page.projects = response;
                        updatePage(callback);
                    });
            }

            catch(error){
                console.log(error);
            }
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

            if(!vm.page.currentProject.images || vm.page.currentProject.images.length <= 0){
                vm.page.currentImage = null;
                return;
            }

        	vm.page.currentImage = vm.page.currentProject.images[index];

        	if(callback)
        		return callback();
        }

        function changeProject(index, callback) {
            if(!index || index === null || index === undefined)
                index = 0;

            vm.page.currentProject = vm.page.projects[index];
            context.updatePageColor(vm.page.currentProject);
            vm.page.borderColor = vm.page.currentProject.borderColor === undefined
                                    ? ''
                                    : vm.page.currentProject.borderColor;
            context.updatePageBorderColor(vm.page.borderColor);
            changeImage();

            if(callback)
                return callback();
        }

        function next(){
            var currentId = vm.page.currentProject.id;
            var nextItem = currentId + 1;

            if(nextItem >= vm.page.projects.length)
                nextItem = 0;

            changeProject(nextItem);
        }

        function previous(){
            var currentId = vm.page.currentProject.id;
            var previousItem = currentId - 1;

            if(previousItem < 0)
                previousItem = vm.page.projects.length - 1;

            changeProject(previousItem);
        }

        function getProjects() {
            return projectHandler.getProjects();
        }
    }
})();
