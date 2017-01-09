(function() {
    'use strict';

    angular
        .module('app.project')
        .factory('projectService', projectService);

    projectService.$inject = ['server', 'projectFactory'];

    function projectService(Server, ProjectFactory) {

        console.log('Loading Project Retrieval Service...');
        var projectServer = new Server('projects');
        var projectFactory;

        var service = {
            projects: [],
            hasApiProjects: false,
            getProjects : getProjects,
            getOfflineSamples : getOfflineSamples,
            processProjectData : processProjectData
        };



        return service;

        function getOfflineSamples() {
	        var samples = [
                {
                    "title": "Automating AutoCAD",
                    "colorCode": "proj-acad",
                    "borderColor": "White",
                    "summary": [
                        "The majority of my initial clients wanted customizations for the functionality or interface of AutoCAD and, using it's very broad API, one can do some fairly impressive things. ",
                        "\n",
                        "One client had a particularly interesting problem: each day they would receive drawings from their various consultants, each done with standards that varied by company. Once received they had to be converted to a single standard and then have various different versions of it placed across their network. Finding a way to turn the many steps included here into a form of business logic was a challenge but ultimately very profitable for them. Each drawing created could take up to 5 minutes to create manually - they were receiving dozens per day - sometimes, hundreds. ",
                        "\n",
                        "Our solution helped them turn those 5 minutes into 5 seconds."
                    ],
                    "tags": [".NET", "AutoCAD", "Leadership"],
                    "images": [
                        {
                            "id": 0,
                            "location": "./server/data/images/autocad/autocad1.png",
                            "caption": "AutoCAD is a design tool used by architects, engineers and designers to draft documentation of products the products they each create. "
                        },
                        {
                            "id": 1,
                            "location": "./server/data/images/autocad/autocad2.png",
                            "caption": [
                                "View of the typical interface of AutoCAD's model space."
                            ]
                        }
                    ]
                },

                {
                    "title": "Nimble",
                    "colorCode": "proj-nimble",
                    "borderColor": "Grey",
                    "summary": [
                        "Nimble is an application which aims to ease the process of working with BIM software applications. By tracking user behavior it's custom logic engine is able to not only make live suggestions to users working in models, it can advise them when they've made modeling mistakes and fix it for them.",
                        "\n",
                        "Being both a desktop and web application Nimble's stack is spread across multiple languages and additionally must manage access to Autodesk Revit's API (which of course presents it's own specific challenges).",
                        "\n",
                        "UX/UI was designed in collaboration with Los Hopper (LOHS)"
                    ],
                    "tags": [".NET", "Javascript"],
                    "images": [
                        {
                            "id": 0,
                            "location": "./server/data/images/nimble/nimblemodel1.jpg",
                            "caption": ""
                        },
                        {
                            "id": 1,
                            "location": "./server/data/images/nimble/nimblemodel2.jpg",
                            "caption": ""
                        },
                        {
                            "id": 2,
                            "location": "./server/data/images/nimble/nimblemodel3.jpg",
                            "caption": ""
                        },
                        {
                            "id": 3,
                            "location": "./server/data/images/nimble/nimbleweb1.jpg",
                            "caption": ""
                        },
                        {
                            "id": 4,
                            "location": "./server/data/images/nimble/nimbleweb2.jpg",
                            "caption": ""
                        },

                        {
                            "id": 5,
                            "location": "./server/data/images/nimble/nimbleweb3.jpg",
                            "caption": ""
                        },
                        {
                            "id": 6,
                            "location": "./server/data/images/nimble/nimbleweb4.jpg",
                            "caption": ""
                        },
                        {
                            "id": 7,
                            "location": "./server/data/images/nimble/nimbleweb5.jpg",
                            "caption": ""
                        }
                    ]
                },

                {
                    "title": ["Feature/", "Lines"],
                    "colorCode": "proj-assemble",
                    "borderColor": "Grey",
                    "summary": [
                        "Assemble Systems contracted me to work on adding a new feature to their web viewer: one that would allow them to view 2D lines along with 3D model objects. ",
                        "\n",
                        "Assemble's Web Viewer is a great example of how incredibly powerful of WebGL is, particularly when used in well constructed Single Page Applications. That said, one of the challenges of using WebGL in this context is the way in which it renders pixels and lines. ",
                        "\n",
                        "The solution we came up with was simple but elegant. By querying model data prior to retrieval we could resolve whether the item was 2 or 3 dimensional and then present it using either LINES or TRIANGLES mode allowing both to coexist simultaneously."
                    ],
                    "tags": [".NET", "Javascript, WebGL"],
                    "images": [
                        {
                            "id": 0,
                            "location": "./server/data/images/assemble/assembleWeb1.jpg",
                            "caption": "Assemble Viewer showing 3D model alongside 2D data"
                        },
                        {
                            "id": 1,
                            "location": "./server/data/images/assemble/assembleWeb2.png",
                            "caption": "View of Assemble's Web Viewer showing models and the data extracted from said model"
                        },
                        {
                            "id": 2,
                            "location": "./server/data/images/assemble/assembleWeb3.jpg",
                            "caption": ""
                        },
                        {
                            "id": 3,
                            "location": "./server/data/images/assemble/assembleWeb4.jpg",
                            "caption": ""
                        }
                    ]
                },

                {
                    "title": "Simulacra",
                    "colorCode": "proj-simulacra",
                    "borderColor": "White",
                    "summary": [
                        "The 'Simulacra' project was an interesting refactoring effort which turned into a complete overhaul of the client's flagship product.",
                        "\n",
                        "I worked on nearly all aspects of the product, from technical specification and database normalization to UX and UI design. ",
                        "\n",
                        "The original product was a Winforms based desktop application that stored data in a CSV format. The new product is a modern, ASP.NET application with a SQLite database which combines the functions of two applications into one."
                    ],
                    "tags": [".NET", "Javascript, SQL, SQLite, HTML5, CSS3, Angular"],
                    "images": [
                        {
                            "id": 0,
                            "location": "./server/data/images/simulacra/wireframeApplication1.png",
                            "caption": "Wireframing effort to create the initial context of the new product. This is where users would be able to log-in or open their project files."
                        },
                        {
                            "id": 1,
                            "location": "./server/data/images/simulacra/wireframeProject1.png",
                            "caption": "Wireframing effort to create the UI for users working on Project files. Users would typicall open up files sent in from the field and manage their data"
                        },
                        {
                            "id": 2,
                            "location": "./server/data/images/simulacra/wireframeJob1.png",
                            "caption": "Wireframing effort for UI for users working in the field to document field conditions."
                        },
                        {
                            "id": 3,
                            "location": "./server/data/images/simulacra/ftt1.png",
                            "caption": "Original view of Field Condition Documenting software"
                        },
                        {
                            "id": 4,
                            "location": "./server/data/images/simulacra/ftt2.png",
                            "caption": "Original view of Field Condition Documenting software"
                        },
                        {
                            "id": 5,
                            "location": "./server/data/images/simulacra/ftm1.png",
                            "caption": "Original view of Field Data Management software"
                        },
                        {
                            "id": 6,
                            "location": "./server/data/images/simulacra/ftm2.png",
                            "caption": "Original view of Field Data Management software"
                        }
                    ]
                }
	        ];

            return processProjectData(samples);
        }

        function getProjects(){
            console.log('Getting projects from server...');

            return projectServer.getObjects()
                .then(function(response) {
                    var projs = processProjectData(response);
                    service.hasApiProjects = true;
                    service.projects = projs;

                    return service.projects;
                })
                .catch(function(error){
                    console.log(error);
                    var offline = getOfflineSamples();
                    var projs = processProjectData(offline);
                    service.hasApiProjects = true;
                    service.projects = projs;

                    return service.projects;
                });
        }

        function processProjectData(projectData){
            var projects = [];
            projectFactory = new ProjectFactory();

            projectData.forEach(function(proj){
                var processed = projectFactory.createProject(proj);
                projects.push(processed);
            });

            return projects;
        }
    }
})();