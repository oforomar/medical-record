const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create doctor Schema
const DoctorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Cannot create doctor without name']
    },
    nationalID:{
        type: [Number],
        required: [true]
    },
    address:{
        type: String,
        required: [true]
    },
    specialization:{
        type: String,
        required: [true]
    }
});

// create model(collection)
const DoctorModel = mongoose.model('doctor', DoctorSchema);

// export for use in app
module.exports = DoctorModel;