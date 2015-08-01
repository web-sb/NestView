var mongoose = require('../server/mongo.js');


/****************************project格式定义****************************/
var projectSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    info: String,
    creater: String,
    owner: String,
    time: {
        type: Date,
        default: Date.now
    }
});
var Project = mongoose.model('project', projectSchema);
module.exports.Project = Project;
/****************************./project格式定义****************************/
/****************************user格式定义****************************/
var userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    defaultProject: {
        _id: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        }
    },
    time: {
        type: Date,
        default: Date.now
    },
    level: {
        type: Number,
        default: 0
    }
});
var User = mongoose.model('user', userSchema);
module.exports.User = User;
/****************************./user格式定义****************************/
