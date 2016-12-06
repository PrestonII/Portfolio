(function() {
    'use strict';

    angular
        .module('app',
        [
            'ngRoute', 'ngAnimate',

            'app.core', 'app.about', 'app.project'
            //'app.news',
        ]);

    console.log('Initializing the application...');

})();