var mongoose = require("mongoose");
var dbURI = 'mongodb://localhost/runTracker';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

require("./run");
require("./distanceGoal");
require("./paceGoal");
require("/.users");