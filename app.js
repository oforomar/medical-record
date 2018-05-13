const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

app.use(express.static('UI'));

// UI
app.get('/', function(req, res, next){
    res.sendFile(__dirname +'/UI/Text.html');
});

app.use(bodyParser.json());

// connect to mongo db
mongoose.connect('mongodb://medrecordb:pBjpCISesNXthdcnLqeFroeOcS3kTEav4zRImImJVcMNR8uCDKTocc6ZiTvgonuRRpoof4gb0D5ezxjaFnAdDw%3D%3D@medrecordb.documents.azure.com:10255/?ssl=true');
mongoose.Promise = global.Promise;

// to use the routes set up in api
app.use('/api', require('./routes/api'));

// listen for requests 
app.listen(process.env.port || 1337, function(){
    console.log('Now listening!');
})

