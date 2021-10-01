const express = require('express');

const router = express.Router();
const administrator = require('../model/Administrator');
const users = require('../model/User');
const job = require('../model/PostJob');
const createAcc = require('../model/CreateAccount');

//GET BACK ALL THE POSTS
router.get('/admins', async (req,res) => {
    try{
        const admins = await administrator.find();
        res.json(admins);
    }catch(err){
        res.json({ message:err });
    }
});

//SUBMITS A POST
router.post('/admin', async (req, res) => {

    console.log("\n",req.body.age,"\n")
    const admin = new administrator({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        age: req.body.age,
        sex: req.body.sex,
        email: req.body.email,
        password: req.body.password,
        accountType: req.body.accountType,
        // address: {
        //     country: req.body.address.country,
        //     phoneNumber: req.body.address.phoneNumber,
        // },

    });
    try {
        const saved = await admin.save();

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
router.delete('/admin/:id', async (req, res) => {
    try{
        const removePost = await administrator.deleteOne({_id: req.params.id});
        res.json(removePost);
        console.log("sent data")
    }catch(err){
        res.json({message: err});
    }  });

//Update Post
router.patch('/register/:id', async (req, res) => {
    try{
        const updatePost = await createAcc.updateOne(
            { _id: req.params.id },
            { $set: { accountApprovalStatus: req.body.accountApprovalStatus } }
        );
        res.json(updatePost);
    }catch(err){
        res.json({message: err});
    }
});

//Update jobApprovalStaus
router.patch('/job/:id', async (req, res) => {
    try{
        const updatePost = await job.updateOne(
            { _id: req.params.id },
            { $set: { jobApprovalStatus: req.body.jobApprovalStatus } }
        );
        res.json(updatePost);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/freelancers', async(req, res) => {
    const freelancers = await users.find({"accountType":"freelancer"});
    res.json(freelancers);
})

router.get('/users', async (req, res) => {
    
    const allUsers = await users.find();
    res.json(allUsers);
})
router.put('/user/approve', async (req, res) => {

    try {
        const updateUser = await users.updateOne({ '_id': req.body.user_id }, { $set: { 'accountStatus': 'active' } })
        const getUpdated = await users.find();
        console.log(getUpdated);
        res.json(getUpdated)
    } catch (err) {
        console.log(err)
    }
});

router.put('/user/ban', async (req, res) => {

    try {
        const updateUser = await users.updateOne({ '_id': req.body.user_id }, { $set: { 'accountStatus': 'banned' } })
        const getUpdated = await users.find();
       // console.log(getUpdated);
        res.json(getUpdated)
    } catch (err) {
        console.log(err)
    }
});
router.put('/user/unban', async (req, res) => {

    try {
        const updateUser = await users.updateOne({ '_id': req.body.user_id }, { $set: { 'accountStatus': 'active' } })
        const getUpdated = await users.find();
        console.log(getUpdated);
        res.json(getUpdated)
    } catch (err) {
        console.log(err)
    }
});
module.exports = router;