var mongoose = require('../server/mongo.js');


/****************************project格式定义****************************/
var projectSchema = mongoose.Schema({
    name: String,
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