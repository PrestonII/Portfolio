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

app.use('/api', router);

//app.listen(port);
console.log('Magic happens on port ' + port);


