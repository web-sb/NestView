var mongoose = require('../server/mongo.js');
var model = require('../model/widgetModel.js');
var Line = model.Line;
var Bar = model.Bar;
var Radar = model.Radar;
var Polar = model.Polar;
var Pie = model.Pie;
//Line
module.exports.line = Object;

module.exports.line.getList = function (req, res) {
    //找到全部project
    Line.find({}, function (err, result) {
        if (err) console.log("获取Line异常");
        //返回结果
        console.log(result);
        res.json(result);
    });
}

module.exports.line.get = function (req, res) {
    console.log("获得Line ID：" + req.params.id);
    //通过ID查找project
    Line.findOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) console.log("获取Line ID: " + req.params.id + " 异常");
        res.json(result);
    });
}

module.exports.line.post = function (req, res) {
    console.log("添加Line Name：" + req.body.name);
    var line = new Line({
        name: req.body.name,
        info: req.body.info,
        creater: req.session.username,
        owner: req.session.username
    });

    line.save(function (err, result) {
        if (err) {
            res.json({
                message: "Line名已存在！",
                project: result,
                error: true
            });
        } else {
            //成功后返回添加完成的实例
            //添加成功消息
            res.json({
                message: "Line添加成功！",
                project: result,
                error: false
            });
        }
    });

}

module.exports.line.put = function (req, res) {
    Line.findOne({
            _id: req.params.id
        },
        function (err, result) {
            if (err) console.log("更新Line ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "Line " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.name = req.body.name;
            result.info = req.body.info;

            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "Line名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "Line修改成功！",
                        project: result,
                        error: false
                    });
                }
            });

        });
}

module.exports.line.delete = function (req, res) {
    Line.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "Line删除成功！",
            project: result
        });
    });
}

//end line

//bar
module.exports.bar = Object;

module.exports.bar.getList = function (req, res) {
    //找到全部project
    bar.find({}, function (err, result) {
        if (err) console.log("获取Bar异常");
        //返回结果
        console.log(result);
        res.json(result);
    });
}

module.exports.bar.get = function (req, res) {
    console.log("获得Bar ID：" + req.params.id);
    //通过ID查找project
    bar.findOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) console.log("获取Bar ID: " + req.params.id + " 异常");
        res.json(result);
    });
}

module.exports.bar.post = function (req, res) {
    console.log("添加Bar Name：" + req.body.name);
    var bar = new Bar({
        name: req.body.name,
        info: req.body.info,
        creater: req.session.username,
        owner: req.session.username
    });

    bar.save(function (err, result) {
        if (err) {
            res.json({
                message: "Bar名已存在！",
                project: result,
                error: true
            });
        } else {
            //成功后返回添加完成的实例
            //添加成功消息
            res.json({
                message: "Bar添加成功！",
                project: result,
                error: false
            });
        }
    });

}

module.exports.bar.put = function (req, res) {
    bar.findOne({
            _id: req.params.id
        },
        function (err, result) {
            if (err) console.log("更新Bar ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "Bar " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.name = req.body.name;
            result.info = req.body.info;

            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "Bar名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "Bar修改成功！",
                        project: result,
                        error: false
                    });
                }
            });

        });
}

module.exports.bar.delete = function (req, res) {
    bar.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "Bar删除成功！",
            project: result
        });
    });
}

//end bar

//radar
module.exports.radar = Object;

module.exports.radar.getList = function (req, res) {
    //找到全部project
    radar.find({}, function (err, result) {
        if (err) console.log("获取Radar异常");
        //返回结果
        console.log(result);
        res.json(result);
    });
}

module.exports.radar.get = function (req, res) {
    console.log("获得Radar ID：" + req.params.id);
    //通过ID查找project
    radar.findOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) console.log("获取Radar ID: " + req.params.id + " 异常");
        res.json(result);
    });
}

module.exports.radar.post = function (req, res) {
    console.log("添加Radar Name：" + req.body.name);
    var radar = new Radar({
        name: req.body.name,
        info: req.body.info,
        creater: req.session.username,
        owner: req.session.username
    });

    radar.save(function (err, result) {
        if (err) {
            res.json({
                message: "Radar名已存在！",
                project: result,
                error: true
            });
        } else {
            //成功后返回添加完成的实例
            //添加成功消息
            res.json({
                message: "Radar添加成功！",
                project: result,
                error: false
            });
        }
    });

}

module.exports.radar.put = function (req, res) {
    radar.findOne({
            _id: req.params.id
        },
        function (err, result) {
            if (err) console.log("更新Radar ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "Radar " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.name = req.body.name;
            result.info = req.body.info;

            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "Radar名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "Radar修改成功！",
                        project: result,
                        error: false
                    });
                }
            });

        });
}

module.exports.radar.delete = function (req, res) {
    radar.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "Radar删除成功！",
            project: result
        });
    });
}

//end radar

//polar
module.exports.polar = Object;

module.exports.polar.getList = function (req, res) {
    //找到全部project
    polar.find({}, function (err, result) {
        if (err) console.log("获取Polar异常");
        //返回结果
        console.log(result);
        res.json(result);
    });
}

module.exports.polar.get = function (req, res) {
    console.log("获得Polar ID：" + req.params.id);
    //通过ID查找project
    polar.findOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) console.log("获取Polar ID: " + req.params.id + " 异常");
        res.json(result);
    });
}

module.exports.polar.post = function (req, res) {
    console.log("添加Polar Name：" + req.body.name);
    var polar = new Polar({
        name: req.body.name,
        info: req.body.info,
        creater: req.session.username,
        owner: req.session.username
    });

    polar.save(function (err, result) {
        if (err) {
            res.json({
                message: "Polar名已存在！",
                project: result,
                error: true
            });
        } else {
            //成功后返回添加完成的实例
            //添加成功消息
            res.json({
                message: "Polar添加成功！",
                project: result,
                error: false
            });
        }
    });

}

module.exports.polar.put = function (req, res) {
    polar.findOne({
            _id: req.params.id
        },
        function (err, result) {
            if (err) console.log("更新Polar ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "Polar " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.name = req.body.name;
            result.info = req.body.info;

            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "Polar名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "Polar修改成功！",
                        project: result,
                        error: false
                    });
                }
            });

        });
}

module.exports.polar.delete = function (req, res) {
    polar.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "Polar删除成功！",
            project: result
        });
    });
}

//end polar

//pie
module.exports.pie = Object;

module.exports.pie.getList = function (req, res) {
    //找到全部project
    pie.find({}, function (err, result) {
        if (err) console.log("获取Pie异常");
        //返回结果
        console.log(result);
        res.json(result);
    });
}

module.exports.pie.get = function (req, res) {
    console.log("获得Pie ID：" + req.params.id);
    //通过ID查找project
    pie.findOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) console.log("获取Pie ID: " + req.params.id + " 异常");
        res.json(result);
    });
}

module.exports.pie.post = function (req, res) {
    console.log("添加Pie Name：" + req.body.name);
    var pie = new Pie({
        name: req.body.name,
        info: req.body.info,
        creater: req.session.username,
        owner: req.session.username
    });

    pie.save(function (err, result) {
        if (err) {
            res.json({
                message: "Pie名已存在！",
                project: result,
                error: true
            });
        } else {
            //成功后返回添加完成的实例
            //添加成功消息
            res.json({
                message: "Pie添加成功！",
                project: result,
                error: false
            });
        }
    });

}

module.exports.pie.put = function (req, res) {
    pie.findOne({
            _id: req.params.id
        },
        function (err, result) {
            if (err) console.log("更新Pie ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "Pie " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.name = req.body.name;
            result.info = req.body.info;

            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "Pie名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "Pie修改成功！",
                        project: result,
                        error: false
                    });
                }
            });

        });
}

module.exports.pie.delete = function (req, res) {
    pie.findOneAndRemove({
        _id: req.params.id
    }, function (err, result) {
        res.json({
            message: "Pie删除成功！",
            project: result
        });
    });
}

//end pie
