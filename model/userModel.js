var mongoose = require('../server/mongo.js');
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
module.exports.User = mongoose.model('user', userSchema);
/****************************./user格式定义****************************/
