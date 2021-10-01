const express = require('express');

const router = express.Router();
const FAQ = require('../model/FAQ');


//GET BACK ALL THE POSTS
router.get('/FAQ', async (req,res) => {
    try{
        const faq = await FAQ.find();
        res.json(faq);
    }catch(err){
        res.json({ message:err });
    }
});

//SUBMITS A POST
router.post('/FAQ', async (req, res) => {
    const faq = new FAQ({
        questionID: req.body.questionID,
        question: req.body.question,
        answer: req.body.answer,
    });
    try{
        const saved = await faq.save();
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