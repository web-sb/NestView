var mongoose = require('../server/mongo.js');
var model = require('../model/userModel.js');
var User = model.User;

module.exports.post = function (req, res) {
    var data = {
        "email": req.body.email,
        "password": req.body.password,
        "save": req.body.save
    }
    User.findOne({
        email: data.email,
        password: data.password
    }, function (err, result) {
        if (err) console.log("用户登录异常！");
        if (!result) {
            res.json({
                message: "用户名或密码错误！",
                error: true
            });
        } else {
            if (data.save) {
                res.cookie.userid = result._id;
                res.cookie.email = result.email; //保存cookie
                res.cookie.username = result.name;
                res.cookie.userlevel = result.level;
                res.cookie.currentproject = result.defaultProject._id;
            }
            req.session.userid = result._id;
            req.session.username = result.name;
            req.session.email = result.email;
            req.session.userlevel = result.level;
            req.session.currentproject = result.defaultProject._id;

            var next = "/home";
            if (result.defaultProject._id === null) next = "/project";

            res.json({
                message: "登录成功！",
                error: false,
                next: next
            });

        }
    });
}

module.exports.delete = function (req, res) {
    req.session.userid = null;
    req.session.username = null;
    req.session.email = null;
    req.session.level = null;
    req.session.currentproject = null;
    req.session.destroy();

    res.json({
        message: "用户已退出！",
        error: false,
        next: "/"
    });
}
