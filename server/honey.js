/****************************模块说明****************************
模块名称：honey
作者名称：杨博
开发时间:20150513
功能简介：提供持久化机制接口，存储JSON格式数据。
        存储数据为不经常访问的内容，数据一般为熟数据，格式固定。
ui
****************************模块说明****************************/

/****************************模块初始****************************/
var mysql = require('mysql');
var conf = require('../config/config.json');
/****************************模块初始****************************/

/****************************系统日志****************************/
//初始化
TABLE_NAME = 'systemlogs';
var connInfo = {
    "host": conf.mysqlHost,
    "database": conf.mysqlDatabase,
    "port": conf.mysqlPort,
    "user": conf.mysqlUser,
    "password": conf.mysqlPassword
}
var connection = mysql.createConnection(connInfo);

//查询
function searchSystemLog(option, data, callback) {
    var selectSQL = 'select * from ' + TABLE_NAME + ' limit 10';
    connection.query(selectSQL, function (err, rows) {
        if (err) console.log(err);
        console.log('查询成功！');
        callback(rows);
    });
}
module.exports.searchSystemLog = searchSystemLog;

//插入
function addSystemLog(option, data, callback) {
    connection.query('INSERT INTO ' + TABLE_NAME + ' ' + 'SET type=?,name=?,time=?,level=?,data=?', [data.type, data.name, data.time, data.level, data.data], function (err, rows) {
        if (err) console.log(err);
        console.log('插入成功！');
        callback(rows);
    });
}
module.exports.addSystemLog = addSystemLog;
/****************************系统日志****************************/