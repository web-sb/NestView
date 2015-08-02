var mongoose = require('../server/mongo.js');
var model = require('../model/model.js');
var Project = model.Project;

module.exports.getList = function (req, res) {
    //找到全部project
    Project.find({}, function (err, result) {
        //        if (err) throw err;
        if (err) console.log("获取用户异常");
        //返回结果
        console.log(result);
        res.json(result);
    });
}

module.exports.get = function (req, res) {
    console.log("获得project ID：" + req.params.id);
    //通过ID查找project
    Project.findOne({
        _id: req.params.id
    }, function (err, result) {
        //        if (err) throw err;
        if (err) console.log("获取工程ID: " + req.params.id + " 异常");
        res.json(result);
    });
}

module.exports.post = function (req, res) {
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

}

module.exports.put = function (req, res) {
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
}

module.exports.delete = function (req, res) {
    Project.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "工程删除成功！",
            project: result
        });
    });
}
