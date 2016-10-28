(function() {
    'use strict';

    angular
        .module('app.core')
        .controller("coreController", coreController);

    console.log('Inject the scope');
    coreController.$inject = ['$scope', 'postalService'];

    function coreController($scope, postalService) {

        var coreVm = this;
        coreVm.getMovies = getMovies;
        coreVm.addMovie = addMovie;
        coreVm.killMovie = killMovie;
        coreVm.movieList = [
            //{ name: "PReston", _id: 2452354355 },
            //{ name: "Fston", _id: 9846168 }
        ];


        function getMovies() {
            return postalService.get()
                .then(reviewData)
                .catch(complain);
        }

        function addMovie(data) {
            console.log("i'll do it! I'll add the movie!");
            console.log(data);
        }

        function killMovie(data) {
            console.log("i'll do it! I'll kill the movie!");
            console.log(data);
        }

        function reviewData( response ) {
            console.log( 'Received data' );

            if (response === null || response.length === 0)
                console.log("There are no movies");

            console.log('got some movies');

            response.data.forEach(function(movie) {
                coreVm.movieList.push(movie);
            });

            //$scope.$apply(function() {
            //    coreVm.movieList = movieList;
            //});
        }

        function complain( error ) {
            console.log( "There was an error: " );
            console.log( error );
            
        }
    };
})();