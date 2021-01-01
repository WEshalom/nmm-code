const express = require('express');
const app = express()
const MongoClient = require('mongodb').MongoClient;
var usersAmount = 10;
const usersArray = [usersAmount]

console.log("called from the html to the js")

//insert users into db
const uri = 'mongodb+srv://nmmuser:nmmpassword@cluster0.s1lrs.mongodb.net' +
    '/Cluster0?retryWrites=true&w=majority';
const client = new MongoClient(
    uri,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
);

client.connect(err => {
    const collection = client.db("test").collection("Collection");
    console.log("building the table")

    const query = { qty: { $gt: 0 } };
    const cursor = collection.find({}
    );
    cursor.forEach(console.dir);
    cursor.forEach(usersArray.push);

    client.close();
});

//TODO
function drawTable(tbody) {
    var tr, td;
    tbody = matchData.querySelector('tbody');
    // loop through data source
    for (var i = 0; i < usersArray.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = usersArray[i];
    }
}
drawTable("matchData");
}


