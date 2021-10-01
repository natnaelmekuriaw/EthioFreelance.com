const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

// router.use(express.json());
// router.use(express.urlencoded({extended:false}));



//GET BACK ALL THE POSTS
router.get('/forgotpassword', async (req,res, next) => {
    // res.render('forgotpassword');
});


router.post('/forgotpassword', async (req,res, next) => {
    // const {email} = req.body;
    
    // //make sure user exit in the database
    // if(email !== user.email){
    //     res.send('user is not registeresd')
    // }

    //1

});


router.get('/reset_password', async (req,res, next) => {
    
});


router.get('/reset_password', async (req,res, next) => {
    
});