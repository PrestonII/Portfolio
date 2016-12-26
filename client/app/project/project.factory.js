(function(){
    "use strict";

   angular
       .module('app.project')
       .factory('projectFactory', projectFactory);

   function projectFactory() {

       var instance = function () {
           var factory = {
               createProject: createProject,
               idCounter: 0
           };

           var Project = function (title, summary, color, tags, images) {
               factory.idCounter++;

               var proj = {
                   id: factory.idCounter,
                   title: title,
                   summary: summary,
                   colorCode: color,
                   tags: tags,
                   images: images
               };

               return proj;
           };

           return factory;

           function createProject(title, summary, color, tags, images) {
               if (typeof title === 'object')
                   return createProjectObject(title);

               var proj = new Project(
                   title,
                   summary,
                   color,
                   tags,
                   images
               );

               return proj;

               function createProjectObject(project) {
                   return createProject(
                       project.title,
                       project.summary,
                       project.colorCode,
                       project.tags,
                       project.images
                   );
               };
           };
       };

       return instance;
   };

})();