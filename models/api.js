var db = require("../models"); 
// Function below will be in charge of getting api info and 
// inserting the info into our database. 
module.exports = function(){
	$.ajax({
		method: "get",
		url: 
	}).then(function(data){
		db.Stock.create({
			currencyType: data
			priceUSD: data
			priceBTC: data 
		}).then(function(){
			
		}); 
	}); 
}