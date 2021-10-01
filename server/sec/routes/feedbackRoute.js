const express = require('express');

const router = express.Router();
const feedback = require('../model/Feedback.js');


//GET BACK ALL THE POSTS
router.get('/feedback', async (req,res) => {
    try{
        const feed = await feedback.find();
        res.json(feed);
    }catch(err){
        res.json({ message:err });
    }
});
//SUBMITS A POST
router.post('/feedback', async (req, res) => {
    const feed_back = new feedback({
        email: req.body.email,
        message: req.body.message,
        sentDate: req.body.sentDate,
    });
    try{
        const saved = await feed_back.save();
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


module.exports = router;