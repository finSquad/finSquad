$(document).ready(function() {
    $(".page-content").append("Hello");

    var request = require("request");
    var express = require("express");

    var request = require("request");



    graphIt();

    function graphIt() {
        request("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,ETH,LTC,BTC", function(error, response, body) {
            if (!error) {
                var jsonResponse = JSON.parse(body);
                console.log(jsonResponse)


            } else {
                console.log("Error: ", error);
            }
        })

        $.get("https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR", function(data) {
            console.log(data);
        });

    };

    $.ajax({
        url: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,ETH,LTC,BTC",
        context: document.body,
        success: function() {
            $(this).addClass("done");
        }
    });
})
