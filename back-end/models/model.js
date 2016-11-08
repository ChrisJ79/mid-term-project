
//model


var mongoose = require('mongoose');

var quoteSchema = mongoose.Schema({
    name : {type : String, required : true},
    jobName : {type : String, required : true},
    contactName : {type : String, required : true},
    contactPhoneNumber : {type : String, required : true},
    emailAddress : {type : String, default : 'me@something.com'},
    notes : {type : String, required : false},
    // What else needs to go here?

});

module.exports = mongoose.model('Hero', heroSchema, 'heroes');
// db.heroes
