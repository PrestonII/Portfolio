(function() {
    'use strict';

    angular
        .module('app.core')
        .controller("coreController", coreController);

    console.log('Inject the scope');
    coreController.$inject = ['$scope', 'postalService'];

    function coreController($scope, postalService) {

        var coreVm = this;
        coreVm.currentMovie = {};
        coreVm.getMovies = getMovies;
        coreVm.addMovie = addMovie;
        coreVm.killMovie = killMovie;
        coreVm.movieList = [];

        function getMovies() {
            // reset the movie list before retrieving
            coreVm.movieList = [];

            return postalService.get()
                .then(updateScope)
                .catch(complain);
        }

        function addMovie() {
            var data = coreVm.currentMovie;
            console.log("i'll do it! I'll add the movie called:");
            console.log(data);
            
            coreVm.currentMovie = {};

            return postalService.create(data)
                .then(refreshScope)
                .catch(complain);
        }

        function killMovie() {
            var data = coreVm.currentMovie;

            console.log("i'll do it! I'll kill the movie!");
            console.log(data);
            
            coreVm.currentMovie = {};

            return postalService.delete(data)
                .then(refreshScope)
                .catch(complain);
        }

        function reviewData( response ) {
            console.log('Received data');

            if (response === null || response.length === 0)
                console.log("There are no movies");

            console.log('request complete');
            console.log(response);
        }

        function complain( error ) {
            console.log( "There was an error: " );
            console.log( error );
        }

        function updateScope( response ) {
            reviewData(response);

            response.data.forEach( function ( movie ) {
                coreVm.movieList.push( movie );
            });
        }

        function refreshScope() {
            return getMovies();
        }
    };
})();