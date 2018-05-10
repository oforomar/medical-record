const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create patient Schema
const PatientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Cannot create paient without name']
    },
    email:{
        type: String,
        required: [true]
    }
});

// create model(collection)
const PatientModel = mongoose.model('patient', PatientSchema);

// export for use in app
module.exports = PatientModel;