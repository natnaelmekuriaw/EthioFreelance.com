const express = require('express');

const ProfileModel = require('../model/User');
const Profile = require('../model/Profile');
// const mongo = require('mongodb');
// const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;


const router = express.Router();


router.get(
    '/freelancer/:id',
    async  (req, res, next) => {
        try {
            console.log('inside freelancer')
            const ids = req.params.id;
            console.log(`id: ${ids}`)
            // var query = { users: mongoose.Types.ObjectID(ids) };
            var good_id = new ObjectId(ids)
            // var o_id = new mongo.ObjectID(ids);
            // connsole.log(`good_id: ${good_id}`)
           
            ProfileModel.findOne({_id:  good_id}, function(err,obj) {
                 console.log(`found one: ${obj.email}`); 
                 res.json({
                    user: obj,
               })
            });
            
        } catch(err){ 
            console.log(err)
        }
       
    }
  );

  router.get(
    '/employer/:id',
    async  (req, res, next) => {
        try {
            console.log('inside emploeyer')
            const id_employer = req.params.id;
            console.log(`id: ${id_employer}`)
            // var query = { users: mongoose.Types.ObjectID(ids) };
            var good_id_employer = new ObjectId(id_employer)
            // var o_id = new mongo.ObjectID(ids);
            // connsole.log(`good_id: ${good_id}`)
           
            ProfileModel.findOne({_id:  good_id_employer}, function(err,obj) {
                 console.log(`found one: ${obj.email}`); 
                 res.json({
                    user: obj,
               })
            });
            
        } catch(err){ 
            console.log(err)
        }
       
    }
  );

  

router.post('/create',  (req, res) => {
    console.log('before try')
    try{
        console.log('in try')

        const ProfileMode = Profile.create({
            skills: req.body.values,
            aboutyou: req.body.aboutyou,
            headline: req.body.headline,
            freelancer: req.body.freelancer_id
        }, function (err , profile) {
            if(err) console.log(err);

            var freelancers_id  = new ObjectId(req.body.freelancer_id)
            Profile.findOne({freelancer:  freelancers_id}, function(err, user) {
                console.log(`users: ${user}`)
                for (var i = 0; i < req.body.certificate.length; i++) {
                    user.certificate.push({
                        certificateName: req.body.certificate[i].certificateName,
                        organizationName: req.body.certificate[i].organizationName,
                        licenseNumber: req.body.certificate[i].licenseNumber,
                        year: req.body.certificate[i].year,
    
                    })
                }

    
                for (var i = 0; i < req.body.education.length; i++) {
    
                    user.education.push({
                        schoolName: req.body.education[i].schoolName,
                        degree: req.body.education[i].degree,
                        graduationYear: req.body.education[i].graduationYear,
                        field: req.body.education[i].field,
                    })
    
               }
               

               for (var i = 0; i < req.body.employment.length; i++) {
                
                user.employment.push({
                    companyName: req.body.employment[i].companyName,
                    position: req.body.employment[i].position,
                    startDateYear: req.body.employment[i].startDateYear,
                    startDateMonth: req.body.employment[i].startDateMonth,
                    endDateYear: req.body.employment[i].endDateYear,
                    endDateMonth: req.body.employment[i].endDateMonth,
                    status: req.body.employment[i].status,
                    summary: req.body.employment[i].summary,
    
                })



    
               }

               for (var i = 0; i < req.body.skills.length; i++){
                user.skill.push(req.body.skills[i])
               }

           user.save()


                
           });
            




        });

            
        console.log('after third for loop')
        res.status(200).json({
            status: 'success',
            message: 'Job post successfully'
        })

    }catch(err) {
        console.log('errorer')
        console.log(err)
        res.json({
                err
            });
    }
});

router.get('/profile/:id', async (req,res) => {
    try {
        
        const ids = req.params.id;
        console.log(`id of profioe: ${ids}`)
        // var query = { users: mongoose.Types.ObjectID(ids) };
        var good_id = new ObjectId(ids)
        // var o_id = new mongo.ObjectID(ids);
        // connsole.log(`good_id: ${good_id}`)
       
        Profile.findOne({freelancer:  good_id}, function(err,obj) {
             console.log(obj.email); 
             res.json({
                user: obj,
           })
        });
        
    } catch(err){
        console.log(err)
    }
});

module.exports = router;