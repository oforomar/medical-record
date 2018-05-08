const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

// create patient Schema
const PatientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Cannot create paient without name']
    },
    email:{
        type: mongoose.SchemaTypes.email,
        required: [true]
    }
});

// create model(collection)
const Patient = mongoose.model('patient', PatientSchema);

// export for use in app
module.exports = Patient;