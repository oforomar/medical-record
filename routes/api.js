const express = require('express');
const router = express.Router();
const PatientModel = require('../models/patient');
const DoctorModel = require('../models/doctor');

// doctor endpoints

// get list of doctors from database
router.get('/doctors', function(request, response, next){
    DoctorModel.find({}).then(function(doctors){
        response.send(doctors);
    });
});


// add new doctor to database
router.post('/doctors', function(request, response, next){
    DoctorModel.create(request.body).then(function(success){
        response.send(success);
    });
});


// update doctor in database
router.put('/doctors/:id', function(request, response, next){
    response.send({type: 'PUT'});
});


// delete doctor from database
router.delete('/doctors/:id', function(request, response, next){
    response.send({type: 'DELETE'});
});


// patient endpoints

// get list of patients from database
router.get('/patients', function(request, response, next){
    response.send({type: 'GET'});
});


// add new patient to database
router.post('/patients', function(request, response, next){
    PatientModel.create(request.body);
    response.send({type: 'POST'});
});


// update patient in database
router.put('/patients/:id', function(request, response, next){
    response.send({type: 'PUT'});
});


// delete patient from database
router.delete('/patients/:id', function(request, response, next){
    response.send({type: 'DELETE'});
});


// export the modules to use them in main app
module.exports = router;