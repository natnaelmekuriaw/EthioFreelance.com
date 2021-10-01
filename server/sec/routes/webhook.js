const express = require('express');
var crypto=require('crypto')



const router = express.Router();

router.post('/pay',  (req, res) => {


    try {
        console.log(`req.body 0: ${req.body}`)
            const Status = req.body.status;

                var payload = req.body // The JSON-encoded UTF-8 text of the webhook 
                var hmac = crypto.createHmac('sha256', Buffer.from(connectionSecret)) // Calulate first part of hmac
                var hmacHex = hmac.update(payload).digest('hex') // Calculate rest of hmac, then convert to hex
                var hmacIsCorrect = (req.headers['X-Api-Hmac'] === hmacHex)
                if(!hmacIsCorrect) {
                    console.log('error of hmac')
                }else{
                
                    if (Status === 'TRANSFER'){
                    console.log('error of hmac')
                    }else{
                        console.log(`${Status}`)
                        console.log(`req.body 1: ${req.body}`)
                    }
                }
                       
    } catch(error) {
        console.log('before try')
    }
});

module.exports = router;