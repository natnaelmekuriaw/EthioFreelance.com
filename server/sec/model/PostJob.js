const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postJobSchema = Schema({
    jobID: {
        type: String,
        required: true
    },
    postedEmpID:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    assignedFreelancerID: {
        type: String,
        required: true
    },
    jobName: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    jobCategory:{
        type: String,
        required: true
    },
    expectedJobDuration: {
        type: Number,
        required: true,
        default: 0
    },  
    jobDescription: {
        type: String,
        required: true
    },
    jobApprovalStatus: {
        type: Boolean,
        default: false,
        required: true
    },
    requiredSkill:{
        skill1:{
            type: String,
            required: false  
        },
        skill2:{
            type: String,
            required: false  
        },
        skill3:{
            type: String,
            required: false  
        },
        skill4:{
            type: String,
            required: false  
        },       
    },
    jobDateHistory:{
        createdDate: {
            type: Date,
            required: true 
        },
        deadlineDate: {
            type: Date,
            required: true
        },
        modifiedDate: {
            type: Date,
            required: true
        },
        closedDate: {
            type: Date,
            required: true
        },
        timeAfterJobPosted: {
            type: Number,
            required: true
        }
    },
    jobSalary: {
        type: Number,
        required: true
    },
    numberofApplicants: {
        type: Number,
        default: 0,
        required: true
    },//number of applicants increase per job 
});

module.exports = mongoose.model('Job', postJobSchema);
