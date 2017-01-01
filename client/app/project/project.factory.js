(function(){
    "use strict";

   angular
       .module('app.project')
       .factory('projectFactory', projectFactory);

   projectFactory.$inject = ['dataprocessor'];

   function projectFactory(processor) {

       var instance = function () {
           var dataProcessor = processor;
           var factory = {
               createProject: createProject,
               sanitizeProjectData : sanitizeProjectData,
               convertTitle : convertTitle,
               convertSummary : convertSummary,
               convertColor : convertColor,
               convertTags : convertTags,
               convertImages : convertImages,
               idCounter: -1
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

               var createdProject = new Project(
                   title,
                   summary,
                   color,
                   tags,
                   images
               );

               return createdProject;

               function createProjectObject(proj) {
                   var project = sanitizeProjectData(proj);

                   return new Project(
                       project.title,
                       project.summary,
                       project.colorCode,
                       project.tags,
                       project.images
                   );
               };
           };

           function sanitizeProjectData(proj){
               var convProject = proj;

               var convTitle = convertTitle(convProject.title);
               var convSummary = convertSummary(convProject.summary);
               var convColor = convertColor(convProject.colorCode);
               var convTags = convertTags(convProject.tags);
               var convImages = convertImages(convProject.images);

               convProject.title = convTitle;
               convProject.summary = convSummary;
               convProject.colorCode = convColor;
               convProject.tags = convTags;
               convProject.images = convImages;

               return convProject;
           }

           function convertTitle(title){
               var convTitle = title;
               var newTitle = [];
               if(!Array.isArray(convTitle)){
                   newTitle.push(convTitle);
                   return newTitle;
               }

               // var convTitle = dataProcessor.convertEscapeSequences(title);
               return convTitle;
           }

           function convertSummary(summary){
                if(summary === null || summary === undefined)
                    return;

               var convSummary = dataProcessor.sanitize(summary);
               return convSummary;
           }

           function convertColor(color){
               var baseColor = {colorCode : 'proj-none'};

               if(color === null || color === undefined)
                   color = baseColor;

               return color;
           }

           function convertTags(tags){
               return tags;
           }

           function convertImages(images){
               let convImages = images;
               if(convImages === null || convImages === undefined)
                   return;

               convImages.forEach(function(image){
                   var location = dataProcessor.convertEscapeSequences(image.location);
                   var caption = dataProcessor.sanitize(image.caption);
                   image.location = location;
                   image.caption = caption;
               });

               return convImages;
           }
       };

       return instance;
   };

})();