/****************************模块说明****************************
模块名称：pollen
作者名称：杨博
开发时间:20150513
功能简介：提供缓存机制接口，存储JSON格式数据。
        存储数据为经常访问的内容，当数据量特别大时应编写对应的转存策略，将
        内存中的数据进行持久化。
****************************模块说明****************************/

/****************************模块初始****************************/
var letters = require('../config/letters.json');
var mongoose = require('../server/mongo_server.js').mongoose;
/****************************模块初始****************************/

/****************************系统日志****************************/
//定义系统日志文件格式
var systemLogSchema = new mongoose.Schema({
    type: Number,
    name: String,
    time: {
        type: Date,
        default: Date.now
    },
    level: {
        type: Number,
        default: 0
    },
    data: String
});
//创建系统日志集合
var SystemLog = mongoose.model('SystemLog', systemLogSchema);
//添加系统日志
function addSystemLog(option, json, callback) {
    //数据验证
    console.log("验证系统日志");
    SystemLog.create({
        type: json.type,
        name: json.name,
        data: json.data
    }, function (err, data) {
        if (err) return handleError(err);
        callback(data);
    });
}
module.exports.addSystemLog = addSystemLog;

function searchSystemLog(option, json, callback) {
        //数据验证
        console.log("验证系统日志");
        SystemLog.findOne().exec(function (err, data) { //暂时写findone作为测试使用
            if (err) return handleError(err);
            callback(data);
        });
    }
    //接口导出
module.exports.searchSystemLog = searchSystemLog;
/****************************系统日志****************************/

/****************************用户心跳****************************/
//定义用户心跳文件格式
var userHeartSchema = new mongoose.Schema({
    type: Number,
    name: String,
    time: {
        type: Date,
        default: Date.now
    },
    level: {
        type: Number,
        default: 0
    },
    data: String
});
//创建用户心跳集合
var UserHeart = mongoose.model('UserHeart', userHeartSchema);
//添加用户心跳
function addUserHeart(option, json, callback) {
        //数据验证
        console.log("验证用户心跳");
        UserHeart.create({
            type: json.type,
            name: json.name,
            data: json.data
        }, function (err, data) {
            if (err) return handleError(err);
            callback(data);
        });
    }
    //接口导出
module.exports.addUserHeart = addUserHeart;
/****************************用户心跳****************************/