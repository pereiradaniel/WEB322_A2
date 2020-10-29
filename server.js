var express = require("express");
var app = express();

// Require path module.
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

// This function will run when the server begins listening for requests.
function onHttpStart() {
    console.log("Server running on: " + HTTP_PORT);
}

app.use(express.static('public'));

// ROUTES
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.get("/login", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/login.html"));
});

app.get("/signup", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/signup.html"));
});

app.post("/register-user", function(req, res) {
    var reply='';
    reply += req.body.fname;
    reply += req.body.lname;
    reply += req.body.email;
    reply += req.body.pword;
    res.send(reply);
});

app.post("/login", function(req, res) {
    var reply='';
    reply += req.body.email;
    reply += req.body.pword;
    res.send(reply);
});

app.get("/mealpackages", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/mealpackages.html"));
});


// Setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);