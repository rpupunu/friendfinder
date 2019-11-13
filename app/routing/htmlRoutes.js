var path = require('path');

module.exports = function(app) {

// SETUP A DEFAULT ROUTE TO THE HOME PAGE
app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/home.html"));
});

//SETUP A ROUTE TO THE SURVEY PAGE
app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/survey.html"));
});

};