﻿var Project = require('../models/project.js');

module.exports = function (router) {

    router.route('/projects')
        .post(function (request, response) {

            var project = new Project();

            project.name = request.body.name;

            project.save(function (err) {
                if (err)
                    response.send(err);

                response.json({ message: 'Project created!' });
            });

        })
        .get(function (request, response) {
            console.log('Attempting to retrieve projects from database');

            Project.find(function (err, projects) {
                if (err)
                    response.send(err);

                response.json(projects);
                console.log('Project data sent!');
            });
            console.log('Loading data...');
        });

    router.route('/projects/:project_id')
        .get(function (request, response) {
            Project.findById(request.params.project_id,
                function (err, project) {
                    if (err)
                        response.send(err);

                    response.json(project);

                });
        })
        .put(function (request, response) {
            Project.findById(request.params.project_id,
                function (err, project) {
                    if (err)
                        response.send(err);

                    console.log(request.body);
                    project.name = request.body.name;

                    project.save(function (err) {
                        if (err)
                            response.send(err);

                        response.json({ message: 'Project has been updated. Title is now ' + request.body.name });
                    });

                });

        })
        .delete(function (request, response) {
            Project.remove({
                _id: request.params.project_id
            },
                function (err, project) {
                    if (err)
                        response.send(err);

                    response.json({ message: request.params.project_id + ' was successfully deleted' });

                });
        });
}
