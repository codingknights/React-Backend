const mongoose = require('mongoose');


// Creating the schema
const UserSchema = new mongoose.Schema({
    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "date_created": {
        type: Date,
        required: true,
        default: Date.now
    },
    "phoneNumber": {
        type: String,
        required: false
    },
    "photoURL": {
        type: String,
        required: false
    }
});

// Creating the model
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;