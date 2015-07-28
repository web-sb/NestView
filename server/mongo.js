/****************************模块初始****************************/
var mongoose = require('mongoose');
var util = require('util');
var conf = require('../config/config.json');
var mongopath = util.format('mongodb://%s:%d/%s', conf.mongoHost, conf.mongoPort, conf.mongoDatabase);
mongoose.connect(mongopath);
module.exports = mongoose;
/****************************模块初始****************************/