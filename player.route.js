const express = require('express');
const playerRoutes = express.Router();
let Player = require('./player.model');

// route to grab all Players in the collection
playerRoutes.route('/').get(function(req, res) {
    Player.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

module.exports = playerRoutes;
