const axios = require('../config/axiosConfig')
require('dotenv').config()
const tokens = require("./token")

function auth(){
    if (false){
        try{
            axios.post('/authenticate', {
                token: process.env.REF_TOKEN,
                system: process.env.system
              })
              .then(function (response) {
                console.log(response);
                process.env['TOKEN'] = response.token;
              })
              .catch(function (error) {
               return error
              });
    
    
        } catch(err){
           return err
        }
    }else{
        try{
          console.log(`response 1: we are here`);
          
            axios.post('/authenticate', {
                principal: process.env.principal,
                credentials: process.env.credentials,
                system: process.env.system
              })
              .then(function (response) {
                console.log(`response 1: ${response.data.token}`);
                tokens.setToken(response.data.token);
              })
              .catch(function (err) {
                  
                console.log(`credentials 1: ${process.env.credentials}`);
                console.log(`principal 1: ${process.env.principal}`);
                console.log(`error 1: ${err}`);

                return err
              });
    
    
        } catch(err){
            console.log(`error 2: ${err}`);
           return err
        }
    }
    
}

module.exports = auth;