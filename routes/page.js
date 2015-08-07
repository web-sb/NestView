var express = require('express');
var router = express.Router();

/* 登录验证 */
var checklogin = function (req, res, next) {
    if (req.session.username != null) {
        next();
    } else {
        res.redirect('/login');
    }
}

/* 封面页 */
router.get('/', function (req, res, next) {
    res.render('index.ejs', {
        title: 'Express'
    });
});

/* 封面页 */
router.get('/index', function (req, res, next) {
    res.render('index.ejs', {
        title: 'Express'
    });
});

/* 登录页 */
router.get('/login', function (req, res, next) {
    if (req.session.email != null) {
        res.redirect('home');
    } else {
        res.render('login.ejs');
    }

});


/* 注册页 */
router.get('/register', function (req, res, next) {
    res.render('register.ejs');
});

/* 找回密码页 */
router.get('/forgot', function (req, res, next) {
    res.render('forgot.ejs');
});

/* 数据页 */
router.get('/data', checklogin);
router.get('/data', function (req, res, next) {
    res.render('data.ejs');
});

/* 显示页 */
router.get('/display', checklogin);
router.get('/display', function (req, res, next) {
    res.render('display.ejs');
});

/* 图形页 */
router.get('/graph', checklogin);
router.get('/graph', function (req, res, next) {
    res.render('graph.ejs');
});

/* 曲线图 */
router.get('/line', checklogin);
router.get('/line', function (req, res, next) {
    res.render('graph/line.ejs');
});

/* 柱状图 */
router.get('/bar', checklogin);
router.get('/bar', function (req, res, next) {
    res.render('graph/bar.ejs');
});

/* 雷达图 */
router.get('/radar', checklogin);
router.get('/radar', function (req, res, next) {
    res.render('graph/radar.ejs');
});

/* 极地图 */
router.get('/polar', checklogin);
router.get('/polar', function (req, res, next) {
    res.render('graph/polar.ejs');
});

/* 饼图 */
router.get('/pie', checklogin);
router.get('/pie', function (req, res, next) {
    res.render('graph/pie.ejs');
});

/* 首页 */
router.get('/home', checklogin);
router.get('/home', function (req, res, next) {
    res.render('home.ejs', {
        username: req.session.username,
        email: req.session.email,
        userlevel: req.session.userlevel
    });
});

/* 日志页 */
router.get('/log', checklogin);
router.get('/log', function (req, res, next) {
    res.render('log.ejs');
});

/* 产品页 */
router.get('/product', checklogin);
router.get('/product', function (req, res, next) {
    res.render('product.ejs');
});

/* 服务页 */
router.get('/service', checklogin);
router.get('/service', function (req, res, next) {
    res.render('service.ejs');
});

/* 用户页 */
router.get('/user', checklogin);
router.get('/user', function (req, res, next) {
    res.render('user.ejs');
});

/* 工程页 */
router.get('/project', checklogin);
router.get('/project', function (req, res, next) {
    res.render('project.ejs');
});

/* 错误页 */
router.get('/error', function (req, res, next) {
    res.render('error.ejs');
});
module.exports = router;
