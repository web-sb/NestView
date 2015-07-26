var users_model = require("../model/users_model");
var letters = require('../config/letters.json');
/****************************用户注册****************************/
//快速文档呵呵
function register(data, callback) {
    users_model.postUsers(null, data, function (err, result) {
        if (err == null) {
            users_model.getUsers(null, data, function (err2, userEntity) {
                if (err2 == null) {
                    callback(null, userEntity);
                } else {
                    callback(err);
                }
            });
        } else {
            callback(err);
        }
    });
}
module.exports.register = register;
/****************************用户注册****************************/

/****************************用户登陆****************************/
function login(data, callback) {
    users_model.getUsers(null, data, function (err, result) {
        if (err == null) {
            if (result.password == data.password) {
                callback(null, result);
            } else {
                callback(letters.user_password_error);
            }
        } else {
            callback(err);
        }
    });
}

module.exports.login = login;
/****************************用户登陆****************************/