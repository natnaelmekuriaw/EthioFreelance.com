const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantsSchema = Schema({
    jobID: {
        type: String,
        default: "",
        required: true,
    }, 
    appliedFreelancerID: {
        type: String,
        default: "",
        required: true
    },
    bid: {
        type: String,
        required: true
    },
    proposal: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('applicants', applicantsSchema);
