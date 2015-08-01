var express = require('express');
var router = express.Router();
var mongoose = require('../server/mongo.js');
var model = require('../model/model.js');
var Project = model.Project;
var User = model.User;

/****************************project API****************************/
//获得全部project
router.get('/project', function (req, res) {
    //找到全部project
    Project.find({}, function (err, result) {
        //        if (err) throw err;
        if (err) console.log("获取用户异常");
        //返回结果
        console.log(result);
        res.json(result);
    });
});

//获得指定ID的Project
router.get('/project/:id', function (req, res) {
    console.log("获得project ID：" + req.params.id);
    //通过ID查找project
    Project.findOne({
        _id: req.params.id
    }, function (err, result) {
        //        if (err) throw err;
        if (err) console.log("获取工程ID: " + req.params.id + " 异常");
        res.json(result);
    });
});

//创建project
router.post("/project", function (req, res) {
    console.log("添加project Name：" + req.body.name);
    var project = new Project({
        name: req.body.name,
        info: req.body.info,
        creater: req.session.username,
        owner: req.session.username
    });

    project.save(function (err, result) {
        if (err) {
            res.json({
                message: "工程名已存在！",
                project: result,
                error: true
            });
        } else {
            //成功后返回添加完成的实例
            //添加成功消息
            res.json({
                message: "工程添加成功！",
                project: result,
                error: false
            });
        }
    });

});

//更新project
router.put("/project/:id", function (req, res) {
    Project.findOne({
            _id: req.params.id
        },
        function (err, result) {
            //            if (err) throw err;
            if (err) console.log("更新工程ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "工程 " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.name = req.body.name;
            result.info = req.body.info;

            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "工程名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "工程修改成功！",
                        project: result,
                        error: false
                    });
                }
            });

        });
});

//删除指定ID的project
router.delete("/project/:id", function (req, res) {
    Project.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "工程删除成功！",
            project: result
        });
    });
});
/****************************End project API****************************/

/****************************user API****************************/
//获得全部user
router.get('/user', function (req, res) {
    //找到全部project
    User.find({}, function (err, result) {
        //        if (err) throw err;
        if (err) console.log("获取用户异常");
        //返回结果
        res.json(result);
    });
});

//获得指定ID的user
router.get('/user/:id', function (req, res) {
    console.log("获得user ID：" + req.params.id);
    //通过ID查找project
    User.findOne({
        _id: req.params.id
    }, function (err, result) {
        //        if (err) throw err;
        if (err) console.log("获取用户ID: " + req.params.id + " 异常");
        res.json(result);
    });
});

//创建user
router.post("/user", function (req, res) {
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
                error: false
            });
        }
    });

});

//更新user
router.put("/user/:id", function (req, res) {
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
});

//更新user
router.put("/user/:id/defaultProject", function (req, res) {
    if (id == "myID") id = req.session.userid;
    User.findOne({
            _id: req.params.id
        },
        function (err, result) {
            //            if (err) throw err;
            if (err) console.log("查找用户ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "用户 " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.projectID = req.body.projectID;

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
});

//删除指定ID的project
router.delete("/user/:id", function (req, res) {
    User.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "用户删除成功！",
            project: result
        });
    });
});
/****************************End user API****************************/






module.exports = router;
