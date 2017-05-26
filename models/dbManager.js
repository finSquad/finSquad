// First creating a connection to mysql database. 
var mysql = require("mysql"); 
// Possible Problems: Will have to have different host once we 
// post application on heroku server 
var sqlConn = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "zee",
	password: "sesame", 
<<<<<<< HEAD
	database: "facefin_db"
=======
	database: "finsquad"
>>>>>>> 3a67d90586ed76fd280f2daef0d3933a4975dade
}); 
sqlConn.connect(function(err){
	if(err){
		console.log(err); 
	}
	console.log("sql connection is :" + sqlConn.threadId); 
}); 
// Create dbManager to manage database. 
var dbManager = {
	/*
	getAllFriendsAndPost: function(){
		// query goes here
	}
	addFriend: function(){

	}
	*/
	addToCurrencyTable: function(BTCprice, USDprice){
		var query = "INSERT INTO tblcurrency(BTCprice, USDprice) VALUES(?,?);";
		sqlConn.query(query, [BTCprice, USDprice], function(err, result){
			if(err){
				console.log(err);
			}
			else{
				console.log(result); 
			}
		}); 
	}
}
module.exports = dbManager; 