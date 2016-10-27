var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Movie = require('./app/models/movie.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

router.use(function(req, res, next) {

    console.log('Something is happening');
    next();

});

router.get('/',
    function (req, res) {
        res.json({ message: 'hooray! welcome to our API!' });
});

router.route('/movies')
    .post(function ( req, res ) {

        var movie = new Movie();

        movie.name = req.body.name;

        movie.save(function ( err ) {
            if (err)
                res.send(err);

            res.json({ message: 'Movie created!' });
        });

    })
    .get(function (req, res) {
        Movie.find(function (err, movies) {
            if (err)
                res.send(err);
        
            res.json(movies);

        });
});

router.route('/movies/:movie_id')
    .get(function(req, res) {
        Movie.findById(req.params.movie_id,
            function(err, movie) {
                if (err)
                    res.send(err);

                res.json(movie);

            });
    })

    .put(function(req, res) {

        Movie.findById(req.params.movie_id, function (err, movie) {
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
        }, function(err, movie) {
            if (err)
                res.send(err);

            res.json({ message: req.params.movie_id + 'successfully deleted' });

        });
    });


app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);




