var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }


});

var User = mongoose.model('user', userSchema);

module.exports=User;