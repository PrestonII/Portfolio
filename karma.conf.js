// Karma configuration
// Generated on Wed Dec 14 2016 10:04:48 GMT-0600 (Central America Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath : '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks : ['jasmine'],


        // list of files / patterns to load in the browser
        files : [
            // Angular modules
            'node_modules/angular/angular.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',



            // Source Code modules
            'client/app/core/core.app.js',
            'client/app/core/!(core.app).js',
            'client/app/about/*.js',
            'client/app/example/*.js',
            'client/app/project/*.js',
            'client/app/app.module.js',
            'client/app/app.router.js',
            'client/app/directives/*.js',

            // Testing Modules
            'tests/client/!(protractorExample.spec).js',
        ],


        // list of files to exclude
        exclude : [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors : {
    
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters : ['progress'],


        // web server port
        port : 9876,


        // enable / disable colors in the output (reporters and logs)
        colors : true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel : config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch : true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers : ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun : false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency : Infinity
    });
}