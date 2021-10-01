const bcrypt = require('bcrypt.js');
const User = require('../model/User')
const  {findByIdAndUpdate} = require('../model/User')

exports.changePassword = async (req, res,next) => {
    console.log("Changepasswords");
    try{
        const {userId} =req.params;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password,salt);
        const userPassword = await User.findByIdAndUpdate({_id:userId},{password:password},{new:true});
        return res.status(200).json({status:true,data:orders});

    }catch(error){
        return res.status(200).json({status:false, error: "Error Occured"})
    }
}