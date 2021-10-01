const express = require('express');

const router = express.Router();
const activityLog = require('../model/ActivityLog');


//GET BACK ALL THE POSTS
router.get('/activityLog', async (req,res) => {
    try{
        const activity = await activityLog.find();
        res.json(activity);
    }catch(err){
        res.json({ message:err });
    }
});

//SUBMITS A POST
router.post('/activityLog', async (req, res) => {
    const activity = new activityLog({
        userID: req.body.userID,
        loggedinTime: req.body.loggedinTime,
        loggedoffTime: req.body.loggedoffTime,
    });
    try{
        const saved = await activity.save();
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



// //Delete job by id  ///this directly deletes from the api /api/isnumber
// router.delete('/activity/:ID', async (req, res) => {
//     try{
//         const removepost = await activity.deleteOne({_id: req.params.ID});
//         res.json(removepost);
//         console.log("sent data")
//     }catch(err){
//         res.json({message: err});
//     }   
// });

module.exports = router;