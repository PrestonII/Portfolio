(function() {
    'use strict';

    var Core = angular
        .module('app.core',
        [
            'ngRoute'
        ]);

    console.log('Initializing core elements...');
    return Core;
})();