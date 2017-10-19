
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//EMPTY ARRAY FOR OUR RESERVATIONS
currentTables = []; 
waitingTables = [];


//ROUTES
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/view", function(req, res){
    res.sendFile(path.join(__dirname, "view.html"));
});
app.get('/reservation', function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"));
});

//POST ROUTE TO THE RESERVATION LIST



//STARTING SERVER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
