var express = require('express');
var router = express.Router();
var users = require('../control/users_control');
var conf = require('../config/config.json');

/* register */
router.post('/register', function (req, res, next) {
    console.log("users_register");
    var data = {
        "name": req.body.username,
        "email": req.body.email,
        "password": req.body.password
    }
    console.log(data);
    users.register(data, function (err, result) {
        console.log(userEntity.name);
        if (err == null) {
            req.session.userid = result._id;
            req.session.username = result.name;
            req.session.email = result.email;
            req.session.userlevel = result.level;
            res.redirect('../home');
        } else {
            res.render('users/info', {
                info: err
            });
        }
    });

});

/* login */
router.post('/login', function (req, res, next) {
    var data = {
        "email": req.body.email,
        "password": req.body.password
    }
    console.log(data);
    users.login(data, function (err, result) {

        if (err == null) {
            if (req.body.save) {
                res.cookie.userid = result._id;
                res.cookie.email = result.email; //保存cookie
                res.cookie.username = result.name;
                res.cookie.userlevel = result.level;
            }
            req.session.userid = result._id;
            req.session.username = result.name;
            req.session.email = result.email;
            req.session.userlevel = result.level;
            res.redirect('../home');
        } else {

            res.render('users/info', {
                info: err
            });
        }
    });

});

/* login */
router.get('/logout', function (req, res, next) {
    req.session.userid = null;
    req.session.username = null;
    req.session.email = null;
    req.session.level = null;
    req.session.destroy();

    res.cookie.userid = null;
    res.cookie.username = null;
    res.cookie.email = null;
    res.cookie.level = null;
    res.cookie(conf.sessionName, 'null', {
        maxAge: 0
    });
    res.redirect('../');

});



module.exports = router;