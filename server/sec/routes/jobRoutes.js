const express = require('express');
const JobModel = require('../model/Job');
const Profile = require('../model/Profile');
const ObjectId = require('mongodb').ObjectId;

const multer = require("multer")
const path = require('path');

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      var filesname = path.basename(file.originalname)
      var extension = path.extname(file.originalname);
      var file_name = path.basename(filesname,extension)
      cb(null, `${file_name}-${Date.now()}${extension}`)
    }
  })

const upload = multer({ storage: storage })

router.post('/post', upload.single('file'), async (req, res) => {
    



    console.log(`${req.body.title}`)
    console.log(`${req.body.discription}`)
    
    try{
      const newJob = await JobModel.create({
        category: req.body.catagory,
        sub_category: req.body.sub_catagory,
        sample_name: req.file.filename,
        title: req.body.title,
        discription: req.body.discription,//incorrect naming
        currency: req.body.currency,
        budgetType:req.body.budgetType,
        budget: req.body.budget,
        duration: req.body.duration,
        skillLevel: req.body.skillLevel,
        employer: req.body.id
    })

      res.status(200).json({
          status: 'success',
          message: 'Job post successfully'
      })} catch (error) {
        res.json({
          // error
          status: false,
          message: 'this is the error' + error
        
        });
      console.log(error)
      }
  });


  router.post('/complete', upload.single('file'), async (req, res) => {
    ids = req.body.jobId
    var good_id = new ObjectId(ids)
    try{

      JobModel.findOne({_id:  good_id}, function(err,Job) {
        Job.result = req.file.filename
        console.log(`Job.result`)
        Job.save(function(err) {
          if(!err) {
              console.log("Proposal added")
          }
          else {
              console.log("Error: could not save Proposals " );
              res.json({ message: err });
          }
      });
      
  });

      res.status(200).json({
          status: 'success',
          message: 'Job complete successfully'
      })} catch (error) {
        res.json({
          // error
          status: false,
          message: 'this is the error' + error
        
        });
      console.log(error)
      }

  });

// router.post(
//     '/post',
//     (req, res, next) => {
//         console.log(req.body)
//         console.log(`selectedFile : ${req.body.selectedFile}`)
//         console.log(`file: ${req.files.file.name}`)

//         const myFiles = req.file.name;
//         console.log(`filesss:${myFiles}`)
//         //  mv() method places the file inside public directory
//         myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
//             if (err) {
//                 console.log(err)
//                 return res.status(500).send({ msg: "Error occured" });
//             }
//             // returing the response with file path and name
//             return res.send({name: myFile.name, path: `/${myFile.name}`});
//         });

//     //   res.json({
//     //     message: 'You made it to the secure route',
//     //     user: req.user,
//     //     token: req.query.secret_token
//     //   })
//     }
//   );

//GET By Id 
router.get(
  '/find/:id',
  async  (req, res, next) => {
      try {
          console.log('inside jobroutes')
          const ids = req.params.id;
          console.log(`id: ${ids}`)
          // var query = { users: mongoose.Types.ObjectID(ids) };
          var good_id = new ObjectId(ids)
          // var o_id = new mongo.ObjectID(ids);
          // connsole.log(`good_id: ${good_id}`)
         
          JobModel.find({employer:  good_id}, function(err,obj) {
               res.json({
                  job: obj,
             })

          });
          
      } catch(err){
          console.log(err)
      }
     
  }
);


//HIRE DEVELOPER


router.post('/hire', async (req, res) => {
  // const applicants = new jobApplicants(req.body)
  try {
    
    const ids = req.body.jobID;
    const freelancerId = req.body.hiredFreelancerID
    console.log(`id: ${ids}`)
    var good_freelancerId = new ObjectId(freelancerId)
    var good_id = new ObjectId(ids) 

   console.log(`freelancer_id:${good_freelancerId}`)
    JobModel.findOne({_id:  good_id}, function(err,Job) {
          Job.assignedFreelancerID = freelancerId
            

          Job.save(function(err) {
            if(!err) {
                console.log("Proposal added")
            }
            else {
                console.log("Error: could not save Proposals " );
                res.json({ message: err });
            }
        });
        
    });
    Profile.findOne({freelancer:  good_freelancerId}, function(err,proflhire) {

      console.log(`freelancer iddddidiiiiiddddd----: ${ good_freelancerId }`)
      console.log(`Profile: ${proflhire}`)
      console.log(`hirshlskj: ${ req.body.jobID}`)
      
      proflhire.hired.push({
        jobId: req.body.jobID,
        message: req.body.message
      })
      
      proflhire.save(function(err) {
        console.log(`erooresss: ${err}`)
        if(!err) {
            console.log("Hired ")
            res.json({message: 'Hired'});
        }

        else {
            console.log("Error: could not save Proposa " );
            res.json({ message: err });
        }
    });

});

    
} catch(err){
    console.log(err)
    res.json({ message: err });
}
});


//SUBMITS A POST
router.post('/apply', async (req, res) => {
  // const applicants = new jobApplicants(req.body)
  try {
    console.log('inside jobroutes') 
    console.log(`ID: ${req.body.appliedFreelancerID}`)
    const ids = req.body.jobID;
    const freelancerid = new ObjectId(req.body.appliedFreelancerID)
    
    console.log(`id: ${ids}`)
    // var query = { users: mongoose.Types.ObjectID(ids) };
    var good_id = new ObjectId(ids)
    // var o_id = new mongo.ObjectID(ids);
    // connsole.log(`good_id: ${good_id}`)
   
    JobModel.findOne({_id:  good_id}, function(err,Job) {

          Job.applicants.push({
            freelancer: req.body.appliedFreelancerID,
            bid: req.body.bid,
            proposal: req.body.proposal
          });


          Job.save(function(err) {
            if(!err) {
                console.log("Proposal added")
            }
            else {
                console.log("Error: could not save Proposa " );
                res.json({ message: err });
            }
        });

    });

    Profile.findOne({freelancer:  freelancerid}, function(err,profile) {
      profile.appliedJobs.push({
        jobId: req.body.jobID
      });

      profile.save(function(err) {
        if(!err) {
            console.log("Proposal added")
            res.json({message: 'added'});
        }
        else {
            console.log("Error: could not save Proposa " );
            res.json({ message: err });
        }
    });
    res.json({message: 'added'})

});
    
    
} catch(err){
    console.log(err)
    res.json({ message: err });
}
});

router.get(
  '/fetch/:id',
  async  (req, res, next) => {
      try {
          console.log('inside jobroutes')
          const ids = req.params.id;
          console.log(`id: ${ids}`)
          // var query = { users: mongoose.Types.ObjectID(ids) };
          var good_id = new ObjectId(ids)
          // var o_id = new mongo.ObjectID(ids);
          // connsole.log(`good_id: ${good_id}`)
         
          JobModel.findOne({_id:  good_id}, function(err,obj) {
                console.log(`JobObj: ${obj}`)
               res.json({
                  job: obj,
             })

          });
          
      } catch(err){
          console.log(err)
      }
     
  }
);


//GET BACK ALL THE POSTS
router.get('/get', async (req,res) => {
    try {
        //console.log('i am here')
        //console.log(`job: ${job}`)
        const view = await JobModel.find();
        //console.log('i am here 123')
        //console.log(`view: ${view}`)
        res.json(view);
    }catch(err){
      res.json({ message: err });
      console.log(err)
    }
});

//Delete job by id  ///this directly deletes from the api /api/isnumber
router.delete('/delete/:ID', async (req, res) => {
    try{
        const removepost = await JobModel.deleteOne({_id: req.params.ID});
        res.json(removepost);
    }catch(err){
        res.json({message: err});
    }
});

//this is for search try
router.post('/search', async (req, res) => {
  let search = req.body.search;
  console.log(search);
  let find = await JobModel.find({ title: { $regex: new RegExp('.*' + search + '.*', 'i') } }).exec();
  res.send(find);
  // console.log(find)
})
router.put('/approve', async (req, res) => {

 // console.log("\n\nHELLOOO\n\n")
 
  const jobId = req.body.jobId;

  console.log(jobId)
  let find = await JobModel.updateOne({ '_id': jobId }, {$set: {'status': 'active'}});
  find = await JobModel.find();
  res.send(find)
})
router.put('/close', async (req, res) => {

 // console.log("\n\nHELLOOO\n\n")
 
  const jobId = req.body.jobId;

  console.log(jobId)
  let find = await JobModel.updateOne({ '_id': jobId }, {$set: {'status': 'closed'}});
  find = await JobModel.find();
  res.send(find)
})
router.put('/delete', async (req, res) => {

 // console.log("\n\nHELLOOO\n\n")
 
  const jobId = req.body.jobId;

  console.log(jobId)
  let find = await JobModel.updateOne({ '_id': jobId }, {$set: {'status': 'deleted'}});
  find = await JobModel.find();
  res.send(find)
})

router.get('/search', async (req, res) => {
  
  //  console.log("\n\nAChooooo\n\n")
  let find = await JobModel.find();
  console.log(find)
    res.send(find)
})

module.exports = router;