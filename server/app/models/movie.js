var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/db_name');
var db = mongoose.createConnection('mongodb://localhost/movies');
//var db = mongoose.connection;

console.log('Database ' + db.name + 'created');

var movieTemplate = {
    name: String,
    released: Boolean,
    watched: Boolean
};

var movieSchema = mongoose.Schema(movieTemplate);

console.log('Movie Model created');
module.exports = mongoose.model('Movie', movieSchema);