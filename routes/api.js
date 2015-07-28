var express = require('express');
var router = express.Router();
var mongoose = require('../server/mongo.js');
var model = require('../model/model.js');
var Project = model.Project;
//获得全部project
router.get('/project', function (req, res) {
    //找到全部project
    Project.find({}, function (err, result) {
        if (err) throw err;
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
        id: req.params.id
    }, function (err, result) {
        if (err) throw err;
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

    Project.findOne({
        name: project.name
    }, function (err, result) {
        if (err) throw err;

        if (!result) {
            //保存实例到数据库
            project.save(function (err, result) {
                if (err) throw err;
                //成功后返回添加完成的实例
                //添加成功消息
                res.json({
                    message: "工程添加成功！",
                    project: result
                });
            });
        } else {
            //添加失败消息
            res.json({
                message: "工程名称已存在！",
                project: result
            });
        }

    });


});

//更新project
router.put("/project/:id", function (req, res) {
    Project.findOne({
        id: req.params.id
    }, function (err, result) {
        if (err) throw err;

        if (!result) {
            res.json({
                message: "工程 " + req.params.id + "未找到！",
            });
        }

        result.name = req.body.name;
        result.isbn = req.body.isbn;
        result.author = req.body.author;
        result.pages = req.body.pages;

        result.save(function (err, result) {
            if (err) throw err;
            res.json({
                message: "工程修改成功！",
                book: result
            });
        });

    });
});

//删除指定ID的project
router.delete("/project/:id", function (req, res) {
    Project.findOneAndRemove({
        id: req.params.id
    }, function (err, result) {
        res.json({
            message: "工程删除成功！",
            project: result
        });
    });
});

module.exports = router;