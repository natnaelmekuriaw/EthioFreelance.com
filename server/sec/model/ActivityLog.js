const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activityLogSchema = Schema({
    userID: {
        type: Date,
        required: true
    },//optional the system may assign

    loggedinTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    loggedoffTime: {
        type: String,
        default: Date.now,
        required: true
    },
});

module.exports = mongoose.model('activitylog', activityLogSchema);
