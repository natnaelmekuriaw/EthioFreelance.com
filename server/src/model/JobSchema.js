const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postJobSchema = Schema({
    jobID: {
        type: String,
        required: true
    },
    postedEmpID:{
        type: String,                           //not used yet
        required: true
    },
    assignedFreelancerID: {
        type: String,
        required: true
    },
   

    //this could be deleted other thing served his purpuse

    // jobName: {
    //     type: String,
    //     required: true
    // },
    // jobType: {
    //     type: String,
    //     required: true
    // },
    // jobCategory:{
    //     type: String,
    //     required: true
    // },
    
    // jobDescription: {
    //     type: String,
    //     required: true
    // },
    // requiredSkill:{
    //     skill1:{
    //         type: String,
    //         required: false  
    //     },
    //     skill2:{
    //         type: String,
    //         required: false  
    //     },
    //     skill3:{
    //         type: String,
    //         required: false  
    //     },
    //     skill4:{
    //         type: String,
    //         required: false  
    //     },       
    // },
    // jobDateHistory:{
    //     createdDate: {
    //         type: Date,
    //         required: true 
    //     },
    //     deadlineDate: {
    //         type: Date,
    //         required: true
    //     },
    //     modifiedDate: {
    //         type: Date,
    //         required: true
    //     },
    //     closedDate: {
    //         type: Date,
    //         required: true
    //     },
    // },
    // jobSalary: {
    //      type: Number,
    //     required: true
    // },
});

// export default model('JobRelated', postJobSchema);