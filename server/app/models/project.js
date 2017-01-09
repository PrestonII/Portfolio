var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/projects');
//var db = mongoose.connection;

// necessary when there is more than a single connection to a database
var options = {
    mongos: true
};
var db = mongoose.createConnection('mongodb://localhost/projects', options);

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

//module.exports = mongoose.model('Project', project);
module.exports = db.model('Project', project);