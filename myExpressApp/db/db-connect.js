var config = require('../config/config');
var mongoose = require('mongoose');

var db = mongoose.connection;

db.once('open', function() {
    console.info('Database connected to ',config.DB_URL);
});
db.once('error', function() {
    var err = new Error('Database Connection Error');
    throw err;
});

function dbConnect(dbName) {
    var uri;
    if (typeof dbName !== 'string') {
        throw new Error('Database name should be string');
    }
    uri = config.DB_URL + dbName;
    mongoose.connect(uri);
}

module.exports = dbConnect;
