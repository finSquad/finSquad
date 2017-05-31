// DEPENDENCIES
// We require express so we can display to HTML
var request = require("request")
var path = require("path");

var express = require("express");
var moment = require("moment")
    // Router sets up 
var router = express.Router();

var dbManager = require("../models/dbManager.js");

// router.get("/", function(req, res){
//     res.sendFile(path.join(__dirname,"../public/assets/graphtest.html"));
// }); 

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

//NEEDS TO BE WORKED ON. Will post to tblgeneralpost. 
router.post("/post_generalpost", function(req, res) {
    // Subtract 7 hours on server. 
    var moment_tstamp = moment().subtract(7, "Hours").format("YYYY-MM-DD+HH:mm:ss");
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

// Create all our routes and set up logic within those routes where required.
/*
router.get("/", function(req, res) {  
    db.Stock.findAll({}).then(function(data) {
        console.log("get all")
        console.log(data)
        var hbsObject = {
            stocks: data
        };
        res.render("index", hbsObject)
    });
});

router.get("/api/stocks?", function(req, res) {
    db.Stock.findAll({}).then(function(data) {
        var hbsObject = {
            stocks: data
        };
        res.json(hbsObject)
    });
});

router.post("/", function(req, res) {

    var newStock = req.body;
    db.Stock.create({
        currency: newStock.currency,
        priceUSD: newStock.priceUSD,
        priceBTC: newStock.priceBTC

    }).then(function() {
        res.redirect("/")

    })

});

router.put("/api/stocks/:id", function(req, res) {
    var id = req.params.id;
    console.log(req.params)
        // console.log(req.body.drinken)
    db.Stock.update({
        priceUSD: newStock.priceUSD,
        priceBTC: newStock.priceBTC
    }, {
        where: {
            id: id
        }
    }).then(function() {
        res.redirect("/")
    });
});

router.delete("/api/stocks/:id", function(req, res) {
    var id = req.params.id;
    db.Stock.destroy({
        where: {
            id: id
        }
    }).then(function() {
        res.redirect("/")
    })
});
*/
// Export routes for server.js to use.
module.exports = router;
