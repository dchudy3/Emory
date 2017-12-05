/**
 * Created by Albert on 11/12/17.
 */

// var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
    // var path = require('path');

    // =====================================
    // LOGIN ===============================
    // =====================================
    // all get requests are written in app.js because of nesting issues.

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/public/views/index.html', // redirect to the secure profile section
            failureRedirect : '/public/views/index.html', // redirect back to the signup page if there is an error CHANGE THIS
            failureFlash : true // allow flash messages
        }),
        function(req, res) {
            console.log("hello, login post request");

            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });

    // =====================================
    // REGISTRATION ==============================
    // =====================================
    // show the registration form
    // app.get('/registration', function(req, res) {
    //     // render the page and pass in any flash data if it exists
    //     console.log("express gets registration view");
    //     res.render('/public/views/registration.html');
    // });

    // process the signup form
    app.post('/registration', passport.authenticate('local-signup', {
        successRedirect : '/public/views/index.html', // redirect to the secure profile section
        failureRedirect : '/public/views/registration.html', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // (INDEX) SECTION =========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/index', isLoggedIn, function(req, res) {
        res.render('/public/views/index.html', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // // =====================================
    // // ADMIN DASHBOARD =========================
    // // =====================================
    // // we will want this protected so you have to be logged in to visit
    // // we will use route middleware to verify this (the isLoggedIn function)
    // app.get('/adminDashboard', isAdmin, function(req, res) {
    //     res.render('/public/views/dashboard.html', {
    //         user : req.user // get the user out of session and pass to template
    //     });
    // });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// function isAdmin(req, res, next) {
//     // if user is authenticated in the session, carry on
//     if (req.isAuthenticated())
//         return next();
//
//     // if they aren't redirect them to the home page
//     res.redirect('/');
// }