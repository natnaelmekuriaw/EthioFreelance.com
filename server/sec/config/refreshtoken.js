const axios = require('../config/axiosConfig')

function refreshToken (){

     
    axios.put('/connections/123456709/token',{
        code: "267536",
    }).then(function (response){
        console.log(`response: ${response}`)
        console.log(`response-data: ${response.data}`)
    }).catch(function (error){
        console.log(`errorj: ${error}`)
    })

}

module.exports = {
    refreshToken
}