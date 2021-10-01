const express = require('express');

const router = express.Router();
const ratingReview = require('../model/RatingReview');


//GET BACK ALL THE POSTS
router.get('/ratingreview', async (req,res) => {
    try{
        const ratingreview = await ratingReview.find();
        res.json(ratingreview);
    }catch(err){
        res.json({ message:err });
    }
});

//SUBMITS A POST
router.post('/ratingreview', async (req, res) => {
    const ratingreview = new ratingReview({
        // UserID: req.body.UserID,
        rating: req.body.rating,
        review: req.body.review,
    });
    try{
        const saved = await ratingreview.save();
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