const express = require('express');
const paymentRoutes = express.Router();
let Payment = require('../Model/Payment');

paymentRoutes.route('/pay').post(function (req,res){
    let payment = new Payment(req.body);
    payment.save()
        .then(payment => {
            res.status(200).send({id: payment._id});
        })
        .catch(err => {
            res.status(400).send("unable to insert");
        });
});
module.exports = paymentRoutes;