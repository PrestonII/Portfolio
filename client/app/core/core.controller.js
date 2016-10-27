(function() {
    'use strict';

    angular
        .module('app.core')
        .controller("coreController", coreController);

    console.log('Inject the scope');
    coreController.$inject = ['$scope'];

    function coreController($scope) {

        console.log('Adding the tagline');
        $scope.tagline = 'To the moon and back';

    }

})();