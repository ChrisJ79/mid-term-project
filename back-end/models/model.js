
//model

//require mongoose
var mongoose = require('mongoose');

//Schema structure
var quoteSchema = mongoose.Schema({
    name : {type : String, required : true},
    jobName : {type : String, required : true},
    contactName : {type : String, required : true},
    contactPhoneNumber : {type : String, required : true},
    //returnEmailAddress === login email adress or 'typed in' email address 
    returnEmailAddress : {type : String, default : 'me@something.com'},
    quoteNumber : {type : Number},
    notes : {type : String, required : false},
    // What else needs to go here?

});


//??
module.exports = mongoose.model('???', quoteSchema, '???');
