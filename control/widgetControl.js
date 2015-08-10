var mongoose = require('../server/mongo.js');
var model = require('../model/widgetModel.js');
var Line = model.Line;
var Bar = model.Bar;
var Radar = model.Radar;
var Polar = model.Polar;
var Pie = model.Pie;
//Line
module.exports.line = new Object;

module.exports.line.getList = function (req, res) {
    //找到全部line
    Line.find({}, {
        'config': 1
    }, function (err, result) {
        if (err) console.log("获取Line异常");
        //返回结果
        console.log(result);
        res.json(result);
    });
}

module.exports.line.get = function (req, res) {
    console.log("获得Line ID：" + req.params.id);
    //通过ID查找line
    Line.findOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) console.log("获取Line ID: " + req.params.id + " 异常");
        res.json(result);
    });
}

module.exports.line.post = function (req, res) {
    console.log("line.post");
    if (req.body.action === "create") {
        var line = new Line({
            config: {
                creater: req.session.username,
                project: req.session.currentproject
            }
        });

        line.save(function (err, result) {
            if (err) {
                res.json({
                    message: "Line添加失败！",
                    line: result,
                    error: true
                });
            } else {
                //成功后返回添加完成的实例
                //添加成功消息
                res.json({
                    message: "Line添加成功！",
                    line: result,
                    error: false
                });
            }
        });
    }
    if (req.body.action === "copy") {
        Line.findOne({
                _id: req.body.lineTemplateId
            },
            function (err, ret) {
                var line = new Line({
                    config: {
                        name: ret.config.name,
                        info: ret.config.info
                    },
                    option: {
                        scaleShowGridLines: ret.option.scaleShowGridLines,
                        scaleGridLineColor: ret.option.scaleGridLineColor,
                        scaleGridLineWidth: ret.option.scaleGridLineWidth,
                        bezierCurve: ret.option.bezierCurve,
                        bezierCurveTension: ret.option.bezierCurveTension,
                        scaleShowHorizontalLines: ret.option.scaleShowHorizontalLines,
                        scaleShowVerticalLines: ret.option.scaleShowVerticalLines,
                        datasetStroke: ret.option.datasetStroke,
                        datasetStrokeWidth: ret.option.datasetStrokeWidth,
                        datasetFill: ret.option.datasetFill,
                        scaleShowGridLines: ret.option.scaleShowGridLines,
                        pointDot: ret.option.pointDot,
                        pointDotRadius: ret.option.pointDotRadius,
                        pointDotStrokeWidth: ret.option.pointDotStrokeWidth,
                        pointHitDetectionRadius: ret.option.pointHitDetectionRadius
                    }
                });
                line.save(function (err, result) {
                    if (err) {
                        res.json({
                            message: "Line复制失败！",
                            line: result,
                            error: true
                        });
                    } else {
                        //成功后返回添加完成的实例
                        //添加成功消息
                        res.json({
                            message: "Line复制成功！",
                            line: result,
                            error: false
                        });
                    }
                });
            });
    }
}

module.exports.line.put = function (req, res) {
    Line.findOne({
            _id: req.params.id
        },
        function (err, result) {
            console.log("123");
            if (err) console.log("更新Line ID: " + req.params.id + " 异常");
            if (!result) {
                res.json({
                    message: "Line " + req.params.id + "未找到！",
                    error: true
                });
            }

            result.config.name = req.body.config.name;
            result.config.info = req.body.config.info;

            result.option.scaleShowGridLines = req.body.option.scaleShowGridLines;
            result.option.scaleGridLineColor = req.body.option.scaleGridLineColor;
            result.option.scaleGridLineWidth = req.body.option.scaleGridLineWidth
            result.option.bezierCurve = req.body.option.bezierCurve;
            result.option.bezierCurveTension = req.body.option.bezierCurveTension;
            result.option.scaleShowHorizontalLines = req.body.option.scaleShowHorizontalLines
            result.option.scaleShowVerticalLines = req.body.option.scaleShowVerticalLines;
            result.option.datasetStroke = req.body.option.datasetStroke;
            result.option.datasetStrokeWidth = req.body.option.datasetStrokeWidth;
            result.option.datasetFill = req.body.option.datasetFill;
            result.option.scaleShowGridLines = req.body.option.scaleShowGridLines;
            result.option.pointDot = req.body.option.pointDot;
            result.option.pointDotRadius = req.body.option.pointDotRadius;
            result.option.pointDotStrokeWidth = req.body.option.pointDotStrokeWidth;
            result.option.pointHitDetectionRadius = req.body.option.pointHitDetectionRadius;
            result.data = req.body.data;

            result.save(function (err, result) {
                if (err) {
                    res.json({
                        message: "Line名已存在！",
                        error: true
                    });
                } else {
                    res.json({
                        message: "Line修改成功！",
                        line: result,
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
module.exports.bar = new Object;

module.exports.bar.getList = function (req, res) {
    //找到全部project
    bar.find({}, {
        'config': 1
    }, function (err, result) {
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
module.exports.radar = new Object;

module.exports.radar.getList = function (req, res) {
    //找到全部project
    radar.find({}, {
        'config': 1
    }, function (err, result) {
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
module.exports.polar = new Object;

module.exports.polar.getList = function (req, res) {
    //找到全部project
    polar.find({}, {
        'config': 1
    }, function (err, result) {
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
module.exports.pie = new Object;

module.exports.pie.getList = function (req, res) {
    //找到全部project
    pie.find({}, {
        'config': 1
    }, function (err, result) {
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
