var express = require("express");
var mysql = require('mysql');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var engines = require('consolidate');
var serveStatic = require('serve-static')

var app = express();

var passport = require('passport');
var flash    = require('connect-flash');

// configuration ===============================================================
// connect to our database

require('./config/passport')(passport); // pass passport for configuration
app.engine('html', engines.mustache);
app.set('view engine', 'html');
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs'); // set up ejs for templating
app.use('/public', serveStatic(path.join(__dirname, 'public')));

// required for passport
app.use(session({
    secret: 'secretformula',
    resave: true,
    saveUninitialized: true
} )); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Main route sends our login HTML file
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/views/login.html');
});

var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

var port = process.env.PORT || 8081,
    http = require('http'),
    fs = require('fs');
    // html = fs.readFileSync('./public/views/login.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

// routes ======================================================================
require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);


// losof -i tcp:8081 in terminal to check if anything running on port; kill -15 PID to end any prior node servers


// var connection = mysql.createConnection({
//     host     : process.env.RDS_HOSTNAME,
//     user     : process.env.RDS_USERNAME,
//     password : process.env.RDS_PASSWORD,
//     port     : process.env.RDS_PORT
// });
//
// connection.connect(function(err) {
//     if (err) {
//         console.log("db error connecting");
//         console.error('Database connection failed: ' + err.stack);
//         return;
//     }
//
//     console.log('Connected to database.');
//
//     // test insertion query
//     var testQuery = "INSERT INTO users (username, email, password, first_name, last_name, user_status) " +
//         "VALUES ('arsaces', 'aabedi3@gatech.edu', 'changethis', 'Albert', 'Abedi', '1')";
//     connection.query(testQuery, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted " + result.affectedRows);
//     });
// });
//
// connection.end();