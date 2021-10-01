const express = require('express');
const axios = require('../config/axiosConfig')
const auth = require('../config/hellocash')
require('dotenv').config()

const router = express.Router();
function tryAuth(){
     axios.get('/connections').then(resp => {
            
        console.log(`response from connections: ${resp.data}`);
        res.status(200).json({
            status: 'success',
            message: 'Job post '
        })
    });
}
// {
//     "amount": 245.34,
//     "description": "Fintubo tubing order X627438",
//     "settlementamount": "USD 46.24",
//     "to": "+251997289566",
//     "currency": "ETB",
//     "tracenumber": "49d968b9-58ae-49d7-848b-94e4dc1f6456",
//     "referenceid": "string",
//     "notifyfrom": true,
//     "notifyto": true,
//     "tofullname": {},
//     "toaddress": {},
//     "tobankcode": {},
//     "tobankaccount": {},
//     "tobankbranch": {},
//     "from": {}
//   }

function transfer(){
    axios.post('/transfers',{
        amount: 245.34,
        description: "just do it",
        settlementamount: "USD 4.35",
        to: "+251944294981",
        currency: "ETB",
        tracenumber: "cff19006-0389-091k-8979045oi8271",
        referenceid: "2049045090856",
        notifyfrom: true,
        notifyto: true,
    }).then(function (response){
        console.log(`response: ${response}`)
    }).catch(function (error){
        console.log(`errorj: ${error}`)
    })
}
function pay(){
    
    

    axios.post('/invoices',{
        amount: 23,
        description: "just do it",
        from: "+251967638538",
        currency: "ETB",
        tracenumber: "cff1b06-0079-679f-5672345oa209",
        notifyfrom: true,
        notifyto: true,
    }).then(function (response){
        console.log(`response: ${response}`)
    }).catch(function (error){
        console.log(`errorj: ${error}`)
    })
}
router.post('/deposites',  async (req, res) => {
    console.log('i am here one')
    try{
        tryAuth()   
    } catch(err){
        if(err.response.status == 403){
            auth()
        }
        res.status(400).json({err})
    }
});


router.post('/deposite',  async (req, res) => {
    console.log('i am here one')
    try{
        pay()   
    } catch(err){
        if(err.response.status == 403){
            auth()
        }
        res.status(400).json({err})
    }
});


router.post('/login',  (req, res) => {
    
    try{
        axios.post('/authenticate', {
            principal: process.env.principal,
            credentials: process.env.credentials,
            system: process.env.system
          })
          .then(function (response) {
            console.log(response);
            process.env['TOKEN'] = response.token;
          })
          .catch(function (error) {
            res.status(400).json({err})
          });


    } catch(err){
        res.status(400).json({err})
    }
})

module.exports = router;