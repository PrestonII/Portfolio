(function() {
    'use strict';

    angular
        .module('app',
        [
            'ngRoute', 'ngAnimate', 'btford.markdown',

            'app.core', 'app.about', 'app.project',
            'app.news'
        ]);

    console.log('Initializing the application...');

})();