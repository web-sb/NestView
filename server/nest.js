/****************************模块说明****************************
模块名称：nest
作者名称：杨博
开发时间:20150513
功能简介：提供输入收集服务采用SOCKET形式，存储JSON格式数据。
****************************模块说明****************************/

/****************************模块初始****************************/
var net = require('net');
var pollen = require('./pollen.js');
var letters = require('../config/letters.json');
var conf = require('../config/config.json');
/****************************模块初始****************************/

/****************************行为选择****************************/
function actionSwitch(json) {
        switch (json.type) {
            //系统心跳
        case conf.pak_type_userHeart:
            pollen.addUserHeart(null, json, null);
            break;
            //系统日志
        case conf.pak_type_systemLog:
            pollen.addSystemLog(null, json, null);
            break;
        default:
            break;
        }
    }
/****************************行为选择****************************/

/****************************连接管理****************************/
var nest = net.createServer(function (bee) { // Connection监听器
    bee.on("end", function () {
        console.log(letters.bee_end);
    });

    bee.on("error", function (data) {
        console.log(letters.bee_error);
    });

    bee.on("data", function (data) {
        console.log(letters.bee_data);
        //插入到数据库
        try{
            var json = JSON.parse(data);
            actionSwitch(json);
        }catch(e){
            console.log(letters.bee_data_error);
        }
    });
});
nest.listen(conf.port, function () { // Listening监听器
    console.log("---开始监听" + conf.port + "---");
});
/****************************连接管理****************************/