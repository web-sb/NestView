var express = require('express');
var router = express.Router();

/* GET home page. */
var checklogin = function (req, res, next) {
        if (req.session.username != null) { //使用cookie
            next();
        } else {
            res.redirect('/login');
        }
    }
    /* index */
router.get('/', function (req, res, next) {
    res.render('index.ejs', {
        title: 'Express'
    });
});

/* index */
router.get('/index', function (req, res, next) {
    res.render('index.ejs', {
        title: 'Express'
    });
});

/* login */
router.get('/login', function (req, res, next) {
    //if (res.cookie["username"] != null) { //使用cookie
    if (req.session.email != null) { //使用cookie
        res.redirect('home');
    } else {
        res.render('login.ejs');
    }

});



/* register */
router.get('/register', function (req, res, next) {
    res.render('register.ejs');
});

/* forgot */
router.get('/forgot', function (req, res, next) {
    res.render('forgot.ejs');
});

/* data */
router.get('/data', checklogin);
router.get('/data', function (req, res, next) {
    res.render('data.ejs');
});

/* display */
router.get('/display', checklogin);
router.get('/display', function (req, res, next) {
    res.render('display.ejs');
});

/* graph */
router.get('/graph', checklogin);
router.get('/graph', function (req, res, next) {
    res.render('graph.ejs');
});

/* home */
router.get('/home', checklogin);
router.get('/home', function (req, res, next) {
    res.render('home.ejs', {
        username: req.session.username,
        email: req.session.email,
        userlevel: req.session.userlevel
    });
});

/* log */
router.get('/log', checklogin);
router.get('/log', function (req, res, next) {
    res.render('log.ejs');
});

/* product */
router.get('/product', checklogin);
router.get('/product', function (req, res, next) {
    res.render('product.ejs');
});

/* service */
router.get('/service', checklogin);
router.get('/service', function (req, res, next) {
    res.render('service.ejs');
});

/* user */
router.get('/user', checklogin);
router.get('/user', function (req, res, next) {
    res.render('user.ejs');
});

/* project */
router.get('/project', checklogin);
router.get('/project', function (req, res, next) {
    res.render('project.ejs');
});

/* error */
router.get('/error', function (req, res, next) {
    res.render('error.ejs');
});
module.exports = router;