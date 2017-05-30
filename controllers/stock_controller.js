// DEPENDENCIES
// We require express so we can display to HTML

var express = require("express");
// Router sets up 
var router = express.Router();
var db = require("../models");
// Import the model (burger.js) to use its database functions.
// var Wine = require("../models/wine.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    db.Wine.findAll({}).then(function(data) {
        var hbsObject = {
            wines: data
        };
        res.render("index", hbsObject)
    });
});

router.get("/api/wines?", function(req, res) {
    db.Wine.findAll({}).then(function(data) {
        var hbsObject = {
            wines: data
        };
        res.json(hbsObject)
    });
});

router.post("/", function(req, res) {
    var newPost = req.body;
    db.Wine.create({
        wine: newWine.wine,
        description: newWine.description,
        drinken: newWine.drinken
    }).then(function() {
        res.redirect("/")
    })
});

router.put("/api/wines/:id", function(req, res) {
    var id = req.params.id;
    console.log(req.params)
        // console.log(req.body.drinken)
    db.Wine.update({
        drinken: req.body.drinken
    }, {
        where: {
            id: id
        }
    }).then(function() {
        res.redirect("/")
    });
});

router.delete("/api/wines/:id", function(req, res) {
    var id = req.params.id;
    db.Wine.destroy({
        where: {
            id: id
        }
    }).then(function() {
        res.redirect("/")
    })
});

// Export routes for server.js to use.
module.exports = router;



