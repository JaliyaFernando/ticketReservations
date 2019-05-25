const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ticket = new Schema({
    userID: {
        type: String,
        default:''
    },
    TrainId: {
        type: String,
        default:''
    },
    PaymentId: {
        type: String,
        default:''
    },
    NoOfPassengers: {
        type: String,
        default:''
    },
    Price: {
        type: String,
        default:''
    }
},{
    collection: 'ticket'
});
module.exports = mongoose.model('Ticket', Ticket);