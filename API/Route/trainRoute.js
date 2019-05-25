const express = require('express');
const trainRoutes = express.Router();
let Train = require('../Model/Train');

trainRoutes.route('/add').post(function (req,res){
    let train = new Train(req.body);
    train.save()
        .then(train => {
            res.status(200).json({"train" : "Successfully inserted train"});
        })
        .catch(err => {
                res.status(400).send("unable to insert train");
        });
});

trainRoutes.route('/').get(function (req, res) {
    Train.find(function(err, train){
        if(err){
            console.log(err);
        }
        else {
            res.json(train);
        }
    });
});


trainRoutes.route('/search/:from/:to').get(function (req, res) {
    let from = req.params.from;
    let to = req.params.to;
    Train.find({Start : from, End : to},function(err, train){
        if(err){
            console.log(err);
        }
        else {
            res.json(train);
        }
    });
});

trainRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Train.findById(id, function (err, train){
        res.json(train);
    });
});

module.exports = trainRoutes;

