(function() {
    'use strict';

    angular
        .module('app.home')
        .controller("homeController", homeController);

    console.log('Inject the scope');
    homeController.$inject = ['$scope', 'postman'];

    function homeController($scope, postalService) {

        var homeVm = this;
        homeVm.currentMovie = {};
        homeVm.getMovies = getMovies;
        homeVm.addMovie = addMovie;
        homeVm.killMovie = killMovie;
        homeVm.movieList = [];

        function getMovies() {
            // reset the movie list before retrieving
            homeVm.movieList = [];

            return postalService.get()
                .then(updateScope)
                .catch(complain);
        }

        function addMovie() {
            var data = homeVm.currentMovie;
            console.log("i'll do it! I'll add the movie called:");
            console.log(data);
            
            homeVm.currentMovie = {};

            return postalService.create(data)
                .then(refreshScope)
                .catch(complain);
        }

        function killMovie() {
            var data = homeVm.currentMovie;

            console.log("i'll do it! I'll kill the movie!");
            console.log(data);
            
            homeVm.currentMovie = {};

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
                homeVm.movieList.push( movie );
            });
        }

        function refreshScope() {
            return getMovies();
        }
    };
})();