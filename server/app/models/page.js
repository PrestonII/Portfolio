var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pages');
var db = mongoose.connection;

console.log('Database: ' + db.name + 'has been created');

var Page = {
    name        : String,
    title       : String,
    content     : [{
        title   : String,
        content : String
    }],
    project     : { type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
};

var pageSchema = mongoose.Schema(Page);

console.log('Page Model created');
module.exports = mongoose.model('Page', pageSchema);