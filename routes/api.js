var express = require('express');
var router = express.Router();

var host = require('../control/hostControl.js');
var user = require('../control/userControl.js');
var project = require('../control/projectControl.js');
var widget = require('../control/widgetControl.js');

/****************************user API****************************/
//获得全部user
router.get('/user', user.getList);

//获得指定ID的user
router.get('/user/:id', user.get);

//创建user
router.post("/user", user.post);

//更新user
router.put("/user/:id", user.put);

//删除指定ID的project
router.delete("/user/:id", user.delete);

//获得全部user
router.get('/user', user.getList);

//获得指定ID的user
router.get('/user/:id', user.get);

//创建user
router.post("/user", user.post);

//更新user
router.put("/user/:id", user.put);

//更新user.defaultProject
router.put("/user/:id/defaultProject", user.defaultProject.put);

//删除指定ID的project
router.delete("/user/:id", user.delete);
/****************************End user API****************************/

/****************************project API****************************/
//获得全部project
router.get('/project', project.getList);

//获得指定ID的Project
router.get('/project/:id', project.get);

//创建project
router.post("/project", project.post);

//更新project
router.put("/project/:id", project.put);

//删除指定ID的project
router.delete("/project/:id", project.delete);
/****************************End project API****************************/

/****************************host API****************************/
//用户登录
router.post("/host/", host.post);

//用户退出
router.delete("/host", host.delete);
/****************************End host API****************************/

/****************************widget API****************************/
//获得全部widget.line
router.get('/widget/line', widget.line.getList);

//获得指定ID的widget.line
router.get('/widget/line/:id', widget.line.get);

//创建widget.line
router.post("/widget/line", widget.line.post);

//更新widget.line
router.put("/widget/line/:id", widget.line.put);

//删除指定ID的widget.line
router.delete("/widget/line/:id", widget.line.delete);

//获得全部widget.bar
router.get('/widget/bar', widget.bar.getList);
//获得指定ID的widget.bar
router.get('/widget/bar/:id', widget.bar.get);

//创建widget.bar
router.post("/widget/bar", widget.bar.post);

//更新widget.bar
router.put("/widget/bar/:id", widget.bar.put);

//删除指定ID的widget.bar
router.delete("/widget/bar/:id", widget.bar.delete);

//获得全部widget.radar
router.get('/widget/radar', widget.radar.getList);

//获得指定ID的widget.radar
router.get('/widget/radar/:id', widget.radar.get);

//创建widget.radar
router.post("/widget/radar", widget.radar.post);

//更新widget.radar
router.put("/widget/radar/:id", widget.radar.put);

//删除指定ID的widget.radar
router.delete("/widget/radar/:id", widget.radar.delete);

//获得全部widget.polar
router.get('/widget/polar', widget.polar.getList);

//获得指定ID的widget.polar
router.get('/widget/polar/:id', widget.polar.get);

//创建widget.polar
router.post("/widget/polar", widget.polar.post);

//更新widget.polar
router.put("/widget/polar/:id", widget.polar.put);

//删除指定ID的widget.polar
router.delete("/widget/polar/:id", widget.polar.delete);

//获得全部widget.pie
router.get('/widget/pie', widget.pie.getList);

//获得指定ID的widget.pie
router.get('/widget/pie/:id', widget.pie.get);

//创建widget.pie
router.post("/widget/pie", widget.pie.post);

//更新widget.pie
router.put("/widget/pie/:id", widget.pie.put);

//删除指定ID的widget.pie
router.delete("/widget/pie/:id", widget.pie.delete);
/****************************End widget API****************************/

module.exports = router;
