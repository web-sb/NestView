/****************************模块说明****************************
模块名称：worker
作者名称：杨博
开发时间:20150513
功能简介：提供多种转存策略，将pollen中的生数据经过加工处理后产生熟数据并保存
        在honey中。
****************************模块说明****************************/

/****************************模块初始****************************/
var pollen = require('./pollen.js');
var honey = require('./honey.js');
/****************************模块初始****************************/

/****************************系统日志****************************/
//运行标志位
optionSystemLog = {
    timespan: 10000
} 

//转存策略系统日志至honey
function systemLogTranslate() {
    pollen.searchSystemLog(null, null, function (data) {
        console.log(data);
        honey.addSystemLog(null, data, function (rows) {
            console.log('系统日志转换完成');
        });
    });
}
var enableSystemLogTranslate = false;
//运行函数
function runSystemLogTranslate() {
    var timer = setInterval(function () {
        if (enableSystemLogTranslate) {
            systemLogTranslate();
        }
    }, optionSystemLogTranslate.timespan);
}

runSystemLogTranslate();

//接口导出
module.exports.enableSystemLogTranslate = enableSystemLogTranslate;
module.exports.optionSystemLogTranslate = optionSystemLogTranslate;
module.exports.systemLogTranslate = systemLogTranslate;

//输出 

//查询honey系统日志
function systemLogSearch() {
        honey.searchSystemLog(null, null, function (rows) {
            for (i in rows) {
                console.log(rows[i]);
            }
        });
    }
    //systemLogSearch();
module.exports.systemLogSearch = systemLogSearch;
/****************************系统日志****************************/