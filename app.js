const express = require('express');
const app = express()
const MongoClient = require('mongodb').MongoClient;
const helpers = require("./helpers");
var usersArray = ['Jacob', 'Will', 'Mark', 'Ben', 'Josh', 'Aron', 'Jesse', 'Irina', 'Sam', 'Katie', 'Lyla'];
const randomSeed = helpers.randomIDcreator(usersArray.length);

//log port
const portNumber = 4000;
app.listen(portNumber);
console.log('We are listening on port:', portNumber);

//assign random ID to user and insert users into db
const uri = 'mongodb+srv://nmmuser:nmmpassword@cluster0.s1lrs.mongodb.net' +
    '/Cluster0?retryWrites=true&w=majority';
const client = new MongoClient(
    uri, 
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
);

client.connect(err => {
    const collection = client.db("nextmillenium").collection("users");
    usersArray.forEach(function (item, index) {
        collection.insertOne({
            _id: Number(randomSeed) + Number(index),
            name: item
        });
        console.log("-id: " + Number(randomSeed) + Number(index) + " name: " + item);
    });
    client.close();
    console.log("done task")
});


//static file
app.use('/static', express.static('public'));

