var friendsData = require('../data/friends.js');

module.exports = function(app) {

    // SETUP API ROUTES TO DISPLAY THE RAW FRIENDS DATA
    app.get('/api/friends', function(req, res) {
        res.join(friendsData);
    });

    app.post('/api/friends', function(req, res) {
        friendsData.push(req.body);
    });
};