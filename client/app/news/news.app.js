(function() {
    'use strict';

    angular
        .module('app.news',
        [
            'ngRoute', 'ngAnimate', 'btford.markdown',

            'app.core'
        ]);

    console.log('Loading news module...');
})();