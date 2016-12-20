var Project = require('../models/project.js');

module.exports = function(router, jsonservice) {

    router.route('/projects/internal-store')
        .get(function(request, response, next) {
            var storeLoc = '../../app/services/projects.json';

            var projects = jsonservice.convertToJSON(storeLoc);

            response.send(projects.data);
        });

    router.route('/projects')
        .post(function(request, response) {

            var project = new Project();

            project.title = request.body.title;
            project.summary = request.body.summary;
            project.tags = request.body.tags;
            project.images = request.body.images;

            project.save(function(err) {
                if (err)
                    response.send(err);

                response.json({ message : 'Project created!' });
            });

        })
        .get(function(request, response) {
            console.log('Attempting to retrieve projects from database');

            Project.find(function(err, projects) {
                if (err) {
                    console.log('There was an error, reporting...');
                    response.send(err);
                }

                console.log('Sending project data...');
                response.json(projects);
            });
            console.log('Loading data...');
        });

    router.route('/projects/:project_id')
        .get(function(request, response) {
            Project.findById(request.params.project_id,
                function(err, project) {
                    if (err)
                        response.send(err);

                    response.json(project);

                });
        })
        .put(function(request, response) {
            Project.findById(request.params.project_id,
                function(err, project) {
                    if (err)
                        response.send(err);

                    console.log(request.body);
                    project.name = request.body.name;

                    project.save(function(err) {
                        if (err)
                            response.send(err);

                        response.json({ message : 'Project has been updated. Title is now ' + request.body.name });
                    });

                });

        })
        .delete(function(request, response) {
            Project.remove({
                    _id : request.params.project_id
                },
                function(err, project) {
                    if (err)
                        response.send(err);

                    response.json({ message : request.params.project_id + ' was successfully deleted' });

                });
        });
};
