const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createAccountSchema = Schema({
    
    userID: {
        type: String,
        default: ""
    },
    firstName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    address: {
        country: {
            type: String,
            default: 'Ethiopia'
        },
        phoneNumber: {
            type: Number,
            required: true
        },
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // privilage: {
        
    // },
    accountApprovalStatus: {
        type: Boolean,
        required: true,
        default: false
    },
    accountDateHistory:{
        accountCreatedDate: {
            type: Date,
            required: true,
            default: Date.now ,
        },
        accountDeletedDate: {
            type: Date,   
            required: true,
            default: Date.now ,
        },
        accountInfoModifiedDate: {
            type: Date,   
            required: true,
            default: Date.now ,
        },
        // closedDate: {
        //     type: String,
        //     required: true
        // },
    },
    jobStatus: {
        totalJobsApplied: {
            type: Number,
            default: 0,
            required: true,
        },
        totalJobsDone: {
            type: Number,
            default: 0,
            required: true,    
        },
        totalPendingJobs: {
            type: Number,  
            default: 0,
            required: true,
        },
        totalAssignedJobs: {
            type: Number,   
            default: 0,
            required: true,
        },
    },
});

module.exports = mongoose.model('useraccount', createAccountSchema);
