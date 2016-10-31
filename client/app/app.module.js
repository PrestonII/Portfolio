(function() {
    'use strict';

    angular
        .module('app',
        [
            'ngRoute',

            'app.core',
            'app.home'
            //'app.projects',
            //'app.news',
            //'app.about'
        ]);

    console.log('Initializing the application');

})();