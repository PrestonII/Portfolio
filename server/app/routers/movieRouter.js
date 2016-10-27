var Movie = require('../models/movie.js');

module.exports = function (Router) {

	Router.route('/movies')
		.post(function(req, res) {

			var movie = new Movie();

			movie.name = req.body.name;

			movie.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Movie created!' });
			});

		})
		.get(function(req, res) {
			Movie.find(function(err, movies) {
				if (err)
					res.send(err);

				res.json(movies);

			});
		});

	Router.route('/movies/:movie_id')
		.get(function(req, res) {
			Movie.findById(req.params.movie_id,
				function(err, movie) {
					if (err)
						res.send(err);

					res.json(movie);

				});
		})
		.put(function(req, res) {
			Movie.findById(req.params.movie_id,
				function(err, movie) {
					if (err)
						res.send(err);

					console.log(req.body);
					movie.name = req.body.name;

					movie.save(function(err) {
						if (err)
							res.send(err);

						res.json({ message: 'Movie has been updated. Title is now ' + req.body.name });
					});

				});

		})
		.delete(function(req, res) {
			Movie.remove({
					_id: req.params.movie_id
				},
				function(err, movie) {
					if (err)
						res.send(err);

					res.json({ message: req.params.movie_id + 'successfully deleted' });

				});
		});

}
/*endregion*/