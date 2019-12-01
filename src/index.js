let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let pathViews = './views/';

let app = express();

let apiRoutes = require("./api-routes");


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true, useUnifiedTopology: true }, function(){
    //mongoose.connection.db.dropDatabase();
});

var db = mongoose.connection;

if(!db)
    console.log("Error connecting DB")
else
    console.log("DB connected successfully")

// Setup server port
var port = process.env.PORT || 8081;

// Send message for default URL

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Project on port " + port);
});