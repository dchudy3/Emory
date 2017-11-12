var express = require("express");
// var login = require('./routes/login_routes');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get('./calculator',function(req,res){
//     res.sendFile(path.join(__dirname+'/calculator.html'));
// });

// Main route sends our HTML file
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});


var port = process.env.PORT || 8081,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('./index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);


// losof -i tcp:8081 in terminal to check if anything running on port; kill -15 PID to end any prior node servers

