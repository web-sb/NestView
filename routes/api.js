var express = require('express');
var router = express.Router();
var host = require('../control/hostControl.js');
var user = require('../control/userControl.js');
var project = require('../control/projectControl.js');
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

/****************************user API****************************/
//获得全部user
router.get('/user', user.getList);

//获得指定ID的user
router.get('/user/:id', user.get);

//创建user
router.post("/user", user.post);

//更新user
router.put("/user/:id", user.put);

//更新user
router.put("/user/:id/defaultProject", user.put.DefaulPtroject);

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

//更新user
router.put("/user/:id/defaultProject", user.put.DefaulPtroject);

//删除指定ID的project
router.delete("/user/:id", user.delete);
/****************************End user API****************************/

/****************************host API****************************/
//用户登录
router.post("/host/", host.post);

//用户退出
router.delete("/host", host.delete);
/****************************host API****************************/

module.exports = router;
