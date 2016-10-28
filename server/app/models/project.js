var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var project = Schema({
    name            : { type: String, default: '' },
    images          : [{
        type        : Array, 
        default     : [],
        caption     : String,
        location    : string
    }],
    tags            : {type: Array, default: []}

});

module.exports = mongoose.model('Project', project);