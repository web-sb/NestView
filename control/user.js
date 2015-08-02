var mongoose = require('../server/mongo.js');
var model = require('../model/model.js');
var User = model.User;

module.exports.getList = function (req, res) {
    //找到全部project
    User.find({}, function (err, result) {
        //        if (err) throw err;
        if (err) console.log("获取用户异常");
        //返回结果
        res.json(result);
    });
}


module.exports.get = function (req, res) {
    console.log("获得user ID：" + req.params.id);
    //通过ID查找project
    User.findOne({
        _id: req.params.id
    }, function (err, result) {
        //        if (err) throw err;
        if (err) console.log("获取用户ID: " + req.params.id + " 异常");
        res.json(result);
    });
}


module.exports.post = function (req, res) {
    console.log("添加user Name：" + req.body.name);
    var user = new User({
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password
    });

    user.save(function (err, result) {
        if (err) {
            res.json({
                message: "用户名已存在！",
                error: true
            });
        } else {
            //成功后返回添加完成的实例
            //添加成功消息
            res.json({
                message: "用户添加成功！",
                project: result,
                error: false,
                next: "/host/login"
            });
        }
    });

}


module.exports.put = function (req, res) {
    User.findOne({
            _id: req.params.id
        },
        function (err, result) {
            //            if (err) throw err;
            if (err) console.log("更新用户ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "用户 " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.name = req.body.name;

            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "用户名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "用户修改成功！",
                        project: result,
                        error: false
                    });
                }
            });

        });
}

module.exports.put.DefaulPtroject = function (req, res) {
    console.log(req.params.id);
    console.log(req.session.userid);
    var searchId = req.params.id;
    if (searchId === "myID") searchId = req.session.userid;


    User.findOne({
            _id: searchId
        },
        function (err, result) {
            if (err) console.log("查找用户ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "用户 " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.defaultProject._id = req.body.projectID;
            result.defaultProject.name = req.body.projectName;


            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "用户名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "用户修改成功！",
                        project: result,
                        error: false
                    });
                }
            });

        });
}

module.exports.delete = function (req, res) {
    User.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "用户删除成功！",
            project: result
        });
    });
}
