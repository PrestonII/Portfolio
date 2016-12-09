var express = require('express');
var path = require('path');
var fs = require('fs');
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
var parent = path.join(__dirname, '../');
app.use(express.static(parent));

require('./app/routers/approuter.js')(router);
require('./app/routers/movieRouter.js')(router);
require('./app/routers/projectRouter.js')(router);

app.use('/api', router);

app.get('/', function (request, response) {
    console.log( 'Sending html page' );
    var filePath = path.join(__dirname, '../index.html');
    response.sendFile(filePath);
    console.log('Sent main page');
});

app.listen(port);
console.log('Magic happens on port ' + port);

process.on('uncaughtException', function (err) {
    console.log('This exception occured: ' + err);
});

process.on('SIGKILL', function (err) {
    console.log('When SIGKILL occurs, will shutdown');
    console.log('This exception occured: ' + err);
    app.close();
});

process.on('SIGTERM', function (err) {
    console.log('When SIGTERM occurs, will shutdown');
    console.log('This exception occured: ' + err);
    app.close();
});

module.exports = app;




