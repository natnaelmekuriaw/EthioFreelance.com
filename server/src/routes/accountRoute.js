const express = require('express');

const router = express.Router();
const createAcc = require('../model/CreateAccount');



//GET BACK ALL THE POSTS
router.get('/register', async (req,res) => {
    try {
        const register = await createAcc.find();
        res.json(register);
    }catch(err){
        res.json({ message:err });
    }
});

//SUBMITS A POST
router.post('/register', async (req, res) => {
    const create = new createAcc({
        userID: req.body.userID,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        age: req.body.age,
        sex: req.body.sex,
        address: {
            country: req.body.address.country,           
            phoneNumber: req.body.address.phoneNumber,
        },
        email: req.body.email,
        password: req.body.password,
        accountApprovalStatus: req.body.accountApprovalStatus,
        // accountDateHistory: {
        //     accountCreatedDate: req.body.accountDateHistory.accountCreatedDate,
        //     accountDeletedDate: req.body.accountDateHistory.accountDeletedDate,
        //     accountInfoModifiedDate: req.body.accountDateHistory.accountInfoModifiedDate,
        // },
        // jobStatus: {
        //     totalJobsApplied: req.body.jobStatus.totalJobsApplied,
        //     totalJobsDone: req.body.jobStatus.totalJobsDone,
        //     totalPendingJobs: req.body.jobStatus.totalPendingJobs,
        //     totalAssignedJobs: req.body.jobStatus.totalAssignedJobs,
        //     //this is not working while writing to db need finxing this a remainder
        // },
    });
    try{
        const savedPost = await create.save();
        res.json(savedPost);
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
router.delete('/register/:ID', async (req, res) => {
    try{
        const removepost = await createAcc.remove({_id: req.params.ID});
        res.json(removepost);
    }catch(err){
        res.json({message: err});
    }   
});

module.exports = router;