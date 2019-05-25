const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    FName: {
        type: String,
        default:''
    },
    LName: {
        type: String,
        default:''
    },
    Mobile: {
        type: String,
        default:''
    },
    Email: {
        type: String,
        default:''
    }
},{
    collection: 'user'
});
module.exports = mongoose.model('User', User);