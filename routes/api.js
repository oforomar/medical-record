const express = require('express');
const router = express.Router();
const PatientModel = require('../models/patient');

// patients

// get list of patients from database
router.get('/patients', function(req, res, next){
    res.send({type: 'GET'});
});


// add new patient to database
router.post('/patients', function(req, res, next){
    PatientModel.create(request.body).then(function(success){
        res.send(success);
    });
});


// update patient in database
router.put('/patients/:id', function(req, res, next){
    res.send({type: 'PUT'});
});


// delete patient from database
router.delete('/patients/:id', function(req, res, next){
    res.send({type: 'DELETE'});
});


// export the modules to use them in main app
module.exports = router;