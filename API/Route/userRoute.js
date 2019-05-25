const express = require('express');
const userRoutes = express.Router();
let User = require('../model/User');

userRoutes.route('/addUser').post(function (req,res){
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).send({id: user._id});
        })
        .catch(err => {
            res.status(400).send("unable to insert user");
        });
});

module.exports = userRoutes;