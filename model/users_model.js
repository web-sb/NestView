/****************************模块初始****************************/
var letters = require('../config/letters.json');
var mongoose = require('../server/mongo.js');
/****************************模块初始****************************/

/****************************用户格式****************************/
//定义用户文件格式
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    time: {
        type: Date,
        default: Date.now
    },
    level: {
        type: Number,
        default: 0
    }
});
//创建用户集合
var Users = mongoose.model('Users', userSchema);
/****************************用户格式****************************/

/****************************添加用户****************************/
//添加用户
function postUsers(option, data, callback) {
        console.log("pollen_postUser");
        //数据验证
        Users.findOne({
            email: data.email
        }, function (err, result) {
            if (result == null) {
                Users.create({
                    name: data.name,
                    email: data.email,
                    password: data.password
                }, function (err) {
                    if (err) return handleError(err);
                    callback();
                });
            } else {
                callback(letters.user_email_exist);
            }

        });

    }
    //接口导出
module.exports.postUsers = postUsers;
/****************************添加用户****************************/

/****************************获得用户****************************/
//获得用户
function getUsers(option, data, callback) {
        //数据验证
        Users.findOne({
            email: data.email
        }, function (err, result) {
            if (result == null) {
                callback(letters.user_not_exist);
            } else {
                callback(null, result);
            }
        });

    }
    //接口导出
module.exports.getUsers = getUsers;
/****************************获得用户****************************/