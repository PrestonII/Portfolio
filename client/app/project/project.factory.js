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

           var Project = function (title, summary, color, tags, images, border) {
               factory.idCounter++;

               var proj = {
                   id: factory.idCounter,
                   title: title,
                   summary: summary,
                   colorCode: color,
                   tags: tags,
                   images: images,
                   borderColor: border
               };

               return proj;
           };

           return factory;

           function createProject(title, summary, color, tags, images, border) {
               if (typeof title === 'object')
                   return createProjectObject(title);

               var createdProject = new Project(
                   title,
                   summary,
                   color,
                   tags,
                   images,
	               border
               );

               return createdProject;

               function createProjectObject(proj) {
                   var project = sanitizeProjectData(proj);

                   return new Project(
                       project.title,
                       project.summary,
                       project.colorCode,
                       project.tags,
                       project.images,
	                   project.borderColor
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
               var convBorder = convertBorder(convProject.borderColor);

               convProject.title = convTitle;
               convProject.summary = convSummary;
               convProject.colorCode = convColor;
               convProject.tags = convTags;
               convProject.images = convImages;
               convProject.borderColor = convBorder;

               return convProject;
           }

           function convertTitle(title){
               var convTitle = title;
               var newTitle = [];
               if(!Array.isArray(convTitle)){
                   newTitle.push(convTitle);
                   return newTitle;
               }

               return convTitle;
           }

           function convertSummary(summary){
                if(summary === null || summary === undefined)
                    return new [];

                var sum = summary;
                var converted = [];
                if(!Array.isArray(sum)){
                	converted.push(sum);
                	return converted;
                }

                var currentPart = 0;
                converted.push("");
                sum.forEach(function(part){
                	if(!dataProcessor.hasEscapes(part)) {
		                converted[currentPart] = converted[currentPart].concat(part);
	                }else {
		                converted.push(part);
		                currentPart++;
		                converted.push("");
		                currentPart++;
	                }
	           });

                return converted;
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
               var convImages = images;
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

           function convertBorder(color){
	           var borderColor = {
		           all: '',
		           left: '',
		           right: '',
		           top: '',
		           bottom: ''
	           };

	           borderColor.all = 'border' + color + 'All';
	           borderColor.left = 'border' + color + 'Left';
	           borderColor.right = 'border' + color + 'Right';
	           borderColor.top = 'border' + color + 'Top';
	           borderColor.bottom = 'border' + color + 'Bottom';

	           return borderColor;
           }
       };

       return instance;
   };

})();