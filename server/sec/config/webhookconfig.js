const axios = require('../config/axiosConfig')

function webhookStarter (){

    // {
        
    //     "ip": [
    //       "197.156.64.112/28",
    //       "197.156.71.98/29"
    //     ],
    //     "fromstatus": [
    //       "INITIALIZING",
    //       "PROCESSED"
    //     ],
    //     "tostatus": [
    //       "INITIALIZING",
    //       "PROCESSED"
    //     ],
    //     "eventdate": "2016-12-01T08:55:32Z"
    //id: 123456709
    //   }

    axios.post('/connections/:123456709',{
        token: "string",
        enable: true,
        authorative: false,
        webhook: '//localhost:8081/mycallbackhandler/pay',
        webhookmethod: "POST",
        certificatecheck: false,
        retrytime: 60000,
        timeout: 86400000,

    }).then(function (response){
        console.log(`response: ${response}`)
        console.log(`response-data: ${response.data}`)
    }).catch(function (error){
        console.log(`errorj: ${error}`)
    })

}

module.exports = {
    webhookStarter
}