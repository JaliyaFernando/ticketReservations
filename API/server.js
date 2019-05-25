// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const trainRoute = require('./Route/trainRoute');
const userRoute = require('./Route/userRoute');
const paymentRoute = require('./Route/paymentRoute');

mongoose.promise = global.Promise;

mongoose.connect(config.DB, {userNewUrlParser: true}).then(
    () => {console.log('Database is connected')},
    err => {console.log('Unable to connect to database' + err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/trains', trainRoute);
app.use('/users', userRoute);
app.use('/payments', paymentRoute);

app.listen(PORT, function () {
    console.log('Server is running')
})