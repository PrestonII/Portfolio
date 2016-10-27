var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();

var app = express();
var db = require('./config/db.js');
var port = process.env.PORT || 8080;

app.port = port;

// allows one to parse JSON
app.use(bodyParser.json());

// allows one to parse internal JSON stuff as JSON
app.use(bodyParser.json({ type: 'application/vnd.api + json' }));

// allows parsing of application as Query Strings
app.use(bodyParser.urlencoded({ extended: true }));

// override typical header in request with DELETE/PUT ??
app.use(methodOverride('X-HTTP-Method-Override'));

// set static files location as /public | /public/img will be for users
app.use(express.static(__dirname + '/public'));

require('./app/routers/approuter.js')(router);
require('./app/routers/movieRouter.js')(router);

app.use('/api', router);

//app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;




