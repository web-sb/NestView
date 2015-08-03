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
    },
    widget: {
        line: [{
            id: String,
            name: String
        }],
        bar: [{
            id: String,
            name: String
        }],
        radar: [{
            id: String,
            name: String
        }],
        polar: [{
            id: String,
            name: String
        }],
        pie: [{
            id: String,
            name: String
        }]
    }
});
module.exports.Project = mongoose.model('project', projectSchema);
/****************************./project格式定义****************************/
