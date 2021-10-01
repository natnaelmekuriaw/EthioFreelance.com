const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const UserModel = require('../model/User');
const Profile = require('../model/Profile')
const ObjectId = require('mongodb').ObjectId;



const router = express.Router();

//GET By Id 
router.get(
  '/freelancer/find/:id',
  async  (req, res, next) => {
      try {
          
          const ids = req.params.id;
          console.log(`id: ${ids}`)
          // var query = { users: mongoose.Types.ObjectID(ids) };
          var good_id = new ObjectId(ids)
          // var o_id = new mongo.ObjectID(ids);
          // connsole.log(`good_id: ${good_id}`)
         
          UserModel.findOne({_id:  good_id}, function(err,obj) {
               res.json({
                  freelancer: obj,
             })

          });
          
      } catch(err){
          console.log(err)
      }
     
  }
);


router.post('/signup',  (req, res) => {

  console.log(`email: ${req.body.email}`)
  console.log(`firstanme: ${req.body.firstname}`)

  if(!req.body.email || !req.body.password || !req.body.lastname || !req.body.firstname){
    console.log("hey some are you")

    return res.status('400').json({error: 'You must provide email and password'});
  }
  UserModel.findOne({ username: req.body.username}, async (err, doc) => {
    if (err){
      console.log("hey some are you 0000")
 
      throw err;
    } 
    console.log("hey 23445 are you")

    if(doc) return res.status('400').json({error: 'UserName Already Taken'});
    console.log("hey some 111 you")

  })
  UserModel.findOne({ email: req.body.email }, async (err, doc) => {
    if (err){
      console.log("hey some are you")
      throw err;
    } 
    console.log("hey some nnnnnnn you")

    if (doc) {
      console.log("hey some are you 111")
      return res.status('400').json({error: 'User Already Exists'});
    }

    if (!doc) {
      try {
        
        const email = req.body.email
        const password = req.body.password
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const accountType = req.body.accountType;
        const accountStatus = "pending";
        const totalMoneyMade = 0;
        const remainingMoney = 0;
        console.log(req.body)
        const user = await UserModel.create({firstname,lastname, email, username, password, accountType,accountStatus,totalMoneyMade,remainingMoney});
        //console.log(req.body)
        // const user = await(req.body)
        const body = { _id: user._id, email: user.email };
      console.log("hey some a90090090 you")

        const token = jwt.sign({ user: body }, 'MyS3cr3tK3Y');
        
        return res.json({ 
          token,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          id: user._id,
          accountType: user.accountType
        });
        
      } catch (error) {
        
        return res.status('400').json("Missing credentials");
      }
}
});
})
// router.post('/signup', passport.authenticate('signup', { session: false }),
//       (req, res, next) => {
//         console.log(`pleases please`)
//       user = req.user;
//       const body = { _id: user._id, email: user.email };
//       const token = jwt.sign({ user: body }, 'TOP_SECRET');
      
//       return res.json({ 
//         token,
//         email: user.email,
//         firstname: user.firstname,
//         lastname: user.lastname,
//         accountType: user.accountType
//       });
//     }

 
// );

router.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            //const error = new Error('An errorr occurred eshi.');
            console.log(`err: ${err}, user: ${user}, info: ${info.message} `)
            return res.status('404').json({error: info});
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, 'MyS3cr3tK3Y');
              console.log(`user_id: ${user._id}`)
              let profile_created = false;

              var frelancer = new ObjectId(user._id)
              Profile.findOne({ freelancer: frelancer}, async (err, doc) => {
                if (err){
                  console.log("hey some are you 0000")
                } 

                console.log("hey sucker")
                console.log(`dock: ${doc}`)

            
                if(doc) profile_created = true

              console.log(`Before: ${profile_created}`)

            
              })
              console.log(`After: ${profile_created}`)

              return res.json({ 
                token,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                id: user._id,
                accountType: user.accountType,
                profile_created: profile_created,
              });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

module.exports = router;