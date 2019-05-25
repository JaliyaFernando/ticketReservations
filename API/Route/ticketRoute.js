const express = require('express');
const ticketRoutes = express.Router();
let Ticket = require('../Model/Ticket');
ticketRoutes.route('/ticket').post(function (req,res){
    let ticket = new Ticket(req.body);
    ticket.save()
        .then(ticket => {
            res.status(200).send({id: ticket._id});
        })
        .catch(err => {
            res.status(400).send("unable to insert");
        });
});
module.exports = ticketRoutes;