const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Train = new Schema({
    TrainNo: {
        type: Number,
        default: ''
    },
    Start: {
        type: String,
        default: ''
    },
    End: {
        type: String,
        default: ''
    },
    Seats: {
        type: Number,
        default: ''
    },
    Time: {
        type: String,
        default: ''
    },
    Price: {
        type: String,
        default: ''
    }
}, {
    collection: 'train'
});

module.exports = mongoose.model('Train', Train);