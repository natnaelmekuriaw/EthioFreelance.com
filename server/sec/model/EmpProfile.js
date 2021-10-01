const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpProfileSchema = Schema({
    userID: {
        type: Date,
        required: false
    },//optional the system may assign
    loggedinTime: {
        type: Date,
        default: Date.now,
        required: false
    },
    loggedoffTime: {
        type: String,
        default: Date.now,
        required: false
    },
});

module.exports = mongoose.model('empprofile', EmpProfileSchema);
