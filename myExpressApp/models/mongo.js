var mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/demoDb');

//create instance of schema
var mongoSchema = mongoose.schema;
//create schema(table structure)
var userSchema = {
    "userEmail" : String,
    "userPassword" : String
};

module.exports = mongoose.model('userLogin', userSchema)
