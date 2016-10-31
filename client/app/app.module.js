(function() {
    'use strict';

    angular
        .module('app',
        [
            'ngRoute',

            'app.core',
            'app.about'
            //'app.projects',
            //'app.news',
            //'app.about'
        ]);

    console.log('Initializing the application...');

})();