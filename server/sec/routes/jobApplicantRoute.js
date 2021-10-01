const express = require('express');

const router = express.Router();
const jobApplicants = require('../model/JobApplicants');


//GET BACK ALL THE POSTS
router.get('/jobapplicants', async (req,res) => {
    try{
        const applicants = await jobApplicants.find();
        res.json(applicants);
    }catch(err){
        res.json({ message:err });
    }
});

//SUBMITS A POST
router.post('/jobapplicants', async (req, res) => {
    // const applicants = new jobApplicants(req.body)
    const applicants = new jobApplicants({
        jobID: req.body.jobID,
        appliedFreelancerID: req.body.appliedFreelancerID,
        bid: req.body.bid,
        proposal: req.body.proposal,
    });
    try{
        const saved = await applicants.save();
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
    // const applicants = new jobApplicants({
    //     jobID: req.body.jobID,
    //     appliedFreelancerID: req.body.appliedFreelancerID,
    //     bid: req.body.bid,
    //     proposal: req.body.proposal,
    // });
    // try{
    //     const saved = await applicants.save();
    //     res.json(saved);
    //     // const post = await CreateAcc.create(req.body);
    //     // res.status("201").json({
    //     //     success: true,
    //     //     post
    //     // })
    // }catch(err){
    //     res.json({ message: err });
    // }
// });

module.exports = router;