const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// patients

// get list of patients from database
router.get('/patients', function(request, response){
    response.send({type: 'GET'});
});


// add new patient to database
router.post('/patients', function(request, response){
    Patient.create(request.body);
    response.send({type: 'POST'});
});


// update patient in database
router.put('/patients/:id', function(request, response){
    response.send({type: 'PUT'});
});


// delete patient from database
router.delete('/patients/:id', function(request, response){
    response.send({type: 'DELETE'});
});


// export the modules to use them in main app
module.exports = router;