var path = require('path');

module.exports = function(app) {

    //SETUP A ROUTE TO THE SURVEY PAGE
    app.get("/survey", function(req, res) {
        res.sendfile(path.join(__dirname, "/../public/survey.html"));
    });
    // SETUP A DEFAULT ROUTE TO THE HOME PAGE
    app.use("/", function(req, res) {
        res.sendfile(path.join(__dirname, "/../public/home.html"));
    });
}