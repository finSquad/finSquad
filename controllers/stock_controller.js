// DEPENDENCIES
// We require express so we can display to HTML
var request = require("request")
var path = require("path");

var express = require("express");
var moment = require("moment")
    // Router sets up 
var router = express.Router();

var dbManager = require("../models/dbManager.js");

router.get("/", function(req, res) {
    dbManager.grabAllGeneralPost(function(tableInfo) {
        // console.log(tableInfo)
        var posts = { tblpost: tableInfo };
        // console.log(posts)
        res.render("index", posts)
    })
})

router.get("/tblcurrency", function(req, res) {
    dbManager.getAll_tbl_currency(function(tableInfo) {
        res.json(tableInfo);
        // console.log(tableInfo)
    });
});

// Will post to tblgeneralpost. 
router.post("/post_generalpost", function(req, res) {
    // Subtract 7 hours on server. 
    var moment_tstamp = moment().subtract(7, "Hours").format("MMM-D-YYYY hh:mmA");
    // var moment_tstamp = moment().format("MMM-D-YYYY hh:mmA");
    // console.log(moment_tstamp)
    var newPost = req.body.post;
    dbManager.addToGeneralPost(newPost, moment_tstamp, function() {
        res.redirect("/");
    });
    // res.json(newPost) 
});
// THIS ROUTER WORKS. Will Get all post from general post. 
router.get("/getallgeneralpost", function(req, res) {
    dbManager.grabAllGeneralPost(function(generalpost) {
        res.json(generalpost);
    });
});
// NEEDS TO BE WORKED ON. In charge of grabbing all friends post. 
router.get("/api/:userid/allfriendspost", function(req, res) {
    var userid = parseInt(req.params.userid)
    dbManager.getAllFriendsPost(userid, function(friendsPost) {
        res.json(friendsPost);
    });
});
// NEEDS TO BE WORKED ON. 
router.post("privatepost", function(req, res) {
    dbManager.insertPrivatePost(function(info) {
        res.json(info);
    });
});

// Export routes for server.js to use.
module.exports = router;
