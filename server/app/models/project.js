var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/projects');
// necessary when there is more than a single connection to a database
var db = mongoose.createConnection('mongodb://localhost/projects');
//var db = mongoose.connection;

console.log('Database ' + db.name + ' created');

var Schema = mongoose.Schema;

var project =   Schema({
    title           : { type: String, default: '' },
    summary         : { type: String, default: '' },
    tags            : { type: Array, default: [] },

    images          : [{
        type        : Array, 
        default     : [],
        caption     : String,
        location    : String
    }]
});

module.exports = mongoose.model('Project', project);