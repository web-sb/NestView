var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);
var favicon = require('serve-favicon');
var conf = require('./config/config.json');
var page = require('./routes/page');
var api = require('./routes/api');


var app = express();
app.use(cookieParser());
//配置session存储在mongodb中
app.use(session({
    secret: conf.sessionSecret,
    name: conf.sessionName,
    cookie: {
        maxAge: conf.sessionMaxAge,
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ //创建新的mongodb数据库
        host: conf.mongoHost, //数据库的地址，本机的话就是127.0.0.1，也可以是网络主机
        port: conf.mongoPort, //数据库的端口号
        db: conf.mongoDatabase //数据库的名称。
    })
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '/public/dist/img/icon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', page);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
