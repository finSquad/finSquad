// First creating a connection to mysql database. 
var mysql = require("mysql"); 
// Possible Problems: Will have to have different host once we 
// post application on heroku server 
var sqlConn; 
if(process.env.JAWSDB_URL){
	sqlConn = mysql.createConnection(process.env.JAWSDB_URL); 
}else{
	sqlConn = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "", 
	database: "facefin_db"
	});
}

sqlConn.connect(function(err){
	if(err){
		// console.log(err); 
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
	getAll_tbl_currency: function(CB){
		var query = "SELECT * FROM tblcurrency;";
		sqlConn.query(query, function(err ,result){
			if(err){
				// console.log(err);
			}
			else{
				CB(result); 
			}
		});  
	}, 

	addToCurrencyTable: function(BTCprice, USDprice, moment_tstamp){
		var query = "INSERT INTO tblcurrency(BTCprice, USDprice, moment_tstamp) VALUES(?,?,?);";
		sqlConn.query(query, [BTCprice, USDprice, moment_tstamp], function(err, result){
			if(err){
				console.log(err);
			}
			else{
				console.log(result); 
			}
		}); 
	},
	// NEEDS TO BE TESTED. 
	addToGeneralPost: function(general_post, cb){
		var query = "INSERT INTO tblgeneralpost(general_post) VALUES(?);" 
		sqlConn.query(query, [general_post], function(err, result){ 
			if(err){
				console.log(err); 
				cb();
			}
			else{

				// console.log(result); 
				cb();

			}
		}); 
	},
	// WORKS
	grabAllGeneralPost: function(CB){
		var query = "SELECT * FROM tblgeneralpost ORDER BY id DESC"; 
		sqlConn.query(query, function(err, result){
			if(err){
				console.log(err);
			}
			CB(result); 
		}); 
	}, 
	// NEEDS TO BE TESTED. 
	getAllFriendsPost: function(cb){
		var query = ""; 
		sqlConn.query(query, function(err, result){
			if(err){
				console.log(err);
			}
			cb(result); 
		});
	},
	// NEEDS TO BE TESTED. 
	insertPrivatePost: function(cb){
			var query = ""; 
			sqlConn.query(query, function(err, result){
				if(err){
					console.log(err);
				}
				cb(result); 
			}); 
	}

}
module.exports = dbManager; 