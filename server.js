var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3001;

//Set up the Express app for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// REQUIRE THE ROUTING JS FILES TO HANDLE ROUTES

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Start the server
app.listen(PORT, function() {
    console.log('Application listening on PORT:' + PORT);
});