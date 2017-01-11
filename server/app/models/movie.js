var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/db_name');
//var db = mongoose.connection;

// necessary when there is more than a single connection to a database
var options = {
    mongos: true
};
var db = mongoose.createConnection('mongodb://localhost/movies', options);


console.log('Database ' + db.name + 'created');

var movieTemplate = {
    name: String,
    released: Boolean,
    watched: Boolean
};

var movieSchema = mongoose.Schema(movieTemplate);

console.log('Movie Model created');

//module.exports = mongoose.model('Movie', movieSchema);
module.exports = db.model('Movie', movieSchema);