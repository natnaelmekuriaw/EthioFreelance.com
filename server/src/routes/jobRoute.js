const express = require('express');

const router = express.Router();
const job = require('../model/PostJob');

//GET BACK ALL THE POSTS
router.get('/alljobs', async (req,res) => {
    try {
        //console.log('i am here')
        //console.log(`job: ${job}`)
        const view = await job.find();
        //console.log('i am here 123')
        //console.log(`view: ${view}`)
        res.json(view);
    }catch(err){
        res.json({ message:err });
    }
});

//SUBMITS A POST
router.post('/alljobs', async (req, res) => {
    const postjob = new job({
        jobID: req.body.jobID,
        postedEmpID: req.body.postedEmpID,
        assignedFreelancerID: req.body.assignedFreelancerID,
        
        jobName: req.body.jobName,
        jobType: req.body.jobType,
        jobCategory: req.body.jobCategory,
        expectedJobDuration: req.body.expectedJobDuration,
        jobDescription: req.body.jobDescription,
        jobApprovalStatus: req.body.jobApprovalStatus,
        requiredSkill: {
            skill1: req.body.requiredSkill.skill1,    
            skill2: req.body.requiredSkill.skill2,
            skill3: req.body.requiredSkill.skill3,
            skill4: req.body.requiredSkill.skill4,
        },   
        jobDateHistory: {
            createdDate: req.body.jobDateHistory.createdDate,
            deadlineDate: req.body.jobDateHistory.deadlineDate,
            modifiedDate: req.body.jobDateHistory.modifiedDate,
            closedDate: req.body.jobDateHistory.closedDate,
        },
        jobSalary: req.body.jobSalary,
        numberofApplicants: req.body.numberofApplicants,
    });
    try{
        const saved = await postjob.save();
        res.json(saved);
        // const post = await CreateAcc.create(req.body);
        // res.status("201").json({
        //     success: true,
        //     post
        // })
    }catch(err){
        res.json({ message: err });
    }
});

//Delete job by id  ///this directly deletes from the api /api/isnumber
router.delete('/alljobs/:ID', async (req, res) => {
    try{
        const removepost = await job.remove({_id: req.params.ID});
        res.json(removepost);
    }catch(err){
        res.json({message: err});
    }
});

//this is for search try
router.post('/alljobs/search', async (req, res) => {
   let search = req.body.search;
    let find = await job.find({ jobName: { $regex: new RegExp('.*' + search + '.*', 'i') } }).exec();
    res.send(find);
})
router.put('/alljobs/approve', async (req, res) => {
    alert("\n\nHELLOOO\n\n")
    console.log("\n\nHELLOOO\n\n")
    //    let search = req.body.search;
//     let find = await job.find({ jobName: { $regex: new RegExp('.*' + search + '.*', 'i') } }).exec();
//     res.send(find);
})
module.exports = router;