const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Payment = new Schema({
    userID: {
        type: String,
        default:''
    },
    Name: {
        type: String,
        default:''
    },
    Amount: {
        type: String,
        default:''
    },
    CardNumber: {
        type: String,
        default:''
    },
    CVC: {
        type: String,
        default:''
    }
},{
    collection: 'payment'
});
module.exports = mongoose.model('Payment', Payment);