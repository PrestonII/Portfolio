/// <binding BeforeBuild='jshint:build' />
///<reference path="node_modules/grunt/lib/grunt.js" />
var Grunt = require('grunt');

var TaskRunner = function(Grunt) {

    Grunt.initConfig({
        pkg : Grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },

            build: ['Gruntfile.js', 'server/**/*.js']
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    noFail: true
                },
                src: ['tests/server/*.js']
            }
        },

        watch: {
            scripts: {
                files: ['server/**/*.js', 'tests/server/*.js'],
                tasks: ['jshint', 'mochaTest'],
                options: {
                    debounceDelay: 250,
                }
            }
        }
    });

    Grunt.loadNpmTasks('grunt-contrib-jshint');
    Grunt.loadNpmTasks('grunt-contrib-watch');
    //Grunt.loadNpmTasks('grunt-contrib-jasmine');
    Grunt.loadNpmTasks('grunt-mocha-test');
};

module.exports = TaskRunner(Grunt);