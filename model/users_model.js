/****************************模块初始****************************/
var letters = require('../config/letters.json');
var mongoose = require('../server/mongo.js');
var model = require('./model.js');
var Users = model.User;
/****************************模块初始****************************/

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