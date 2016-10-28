var Movie = require('../models/movie.js');

module.exports = function (router) {

	router.route('/movies')
		.post(function(request, response) {

			var movie = new Movie();

			movie.name = request.body.name;

			movie.save(function(err) {
				if (err)
					response.send(err);

				response.json({ message: 'Movie created!' });
			});

		})
        .get(function (request, response) {
            console.log('Attempting to retrieve movies from database');

			Movie.find(function(err, movies) {
				if (err)
					response.send(err);

				response.json(movies);
                console.log('Movie data sent!');
            });
	        console.log('Loading data...');
	    });

	router.route('/movies/:movie_id')
		.get(function(request, response) {
			Movie.findById(request.params.movie_id,
				function(err, movie) {
					if (err)
						response.send(err);

					response.json(movie);

				});
		})
		.put(function(request, response) {
			Movie.findById(request.params.movie_id,
				function(err, movie) {
					if (err)
						response.send(err);

					console.log(request.body);
					movie.name = request.body.name;

					movie.save(function(err) {
						if (err)
							response.send(err);

						response.json({ message: 'Movie has been updated. Title is now ' + request.body.name });
					});

				});

		})
		.delete(function(request, response) {
			Movie.remove({
					_id: request.params.movie_id
				},
				function(err, movie) {
					if (err)
						response.send(err);

					response.json({ message: request.params.movie_id + 'successfully deleted' });

				});
		});

}
/*endregion*/