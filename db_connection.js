var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'alphabetagamma',
    database: 'awsEcrop'
});

connection.connect(function(err) {
    // if (err) throw err
    //
    // console.log('You are now connected...')

    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }

});