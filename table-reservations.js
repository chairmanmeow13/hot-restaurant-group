// call all requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up express app 
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//EMPTY ARRAY FOR OUR RESERVATIONS
currentTables = []; 
waitingTables = [];


//MAKE ROUTES

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "SOMETHING.html"));
});

HOME RESERVATION AND VIEW
// GET ROUTE FOR RESERVATION PAGE
// GET ROUTE FOR LIST ONLINE


//POST ROUTE TO THE RESERVATION LIST
app.post('/api/new', function(req, res){
    var newRes = req.body;
    newres.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
});


//STARTING SERVER
app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
  
