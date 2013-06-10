
// config express & mongodb
var express = require("express");
var mongo = require('mongodb');
var Server = mongo.Server,
Db = mongo.Db,
BSON = mongo.BSONPure;

var app=express();


var server = new Server('localhost', 27017, { auto_reconnect: true });
db = new Db('studb', server);


//open connection of db

db.open(function(err,db){
				if(!err)
				{
					console.log(" connected to 'studb' db");
					
					db.collection('students',{strict:true},function (err,collection)
										{
											if(err)
											{
												console.log("The 'studb' collection unavilable..!");
											}
										});


				}
			});

exports.addInfo = function (req, res) {
    var studentRecord = req.body;
    db.collection('students', function (err, collection) {
        collection.insert(studentRecord, { safe: true }, function (err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send("Successfully Add studentRecord");
                console.log("Add Record");
            }
        });
    });
}
