const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

app.use(bodyParser.json());

// connect to mongo db
mongoose.connect('mongodb://localhost/record');
mongoose.Promise = global.Promise;

// to use the routes set up in api
app.use('/api', require('./routes/api'));

// listen for requests 
app.listen(process.env.port || 1337, function(){
    console.log('Now listening!');
})

