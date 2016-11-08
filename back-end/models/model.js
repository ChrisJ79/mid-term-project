
//model


var mongoose = require('mongoose');

var quoteSchema = mongoose.Schema({
    name : {type : String, required : true},
    jobName : {},
    contactName : {},
    contactPhoneNumber : {},
    emailAddress : {type : String, default : 'me@something.com'},
    notes : {},

});

module.exports = mongoose.model('Hero', heroSchema, 'heroes');
// db.heroes
