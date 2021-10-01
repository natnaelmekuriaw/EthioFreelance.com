
const catchAsyncErrors = require( '../utils/catchAsyncErrors')
const ErrorHandler = require( '../utils/ErrorHandler')

const User = require('../model/User')

// const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require ('crypto');

//forgot password => /api/password/forgot
exports.forgotPassword = catchAsyncErrors(async(req, res,next) =>{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return next(new ErrorHandler('Usernot found with this email',404));
    }

    //Get reset token
    const resetToken = user.getResetPasswordToken;
    await user.save({validateBeforeSave:false})

    //create reset password url
    const resetUrl = `${req.protocol}://{req.get('host')}/v1/password/reset/${resetToken}`;
    const message = `Your password reset tooken is as follows:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`

    try{
        await sendEmail({
            email:user.email,
            subject:'freelance Password Recovery',
            message
        })
        res.status(200).json({
            success:true,
            message:`Email sent to:${use.email}`
        })
    }catch(error){
        user.getResetPasswordToken = undefined;
        user.getResetPasswordExpire = undefined;
        await user.save({validateBeforeSave: false});
    }
})


//reset password => /api/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res,next) =>{
    //Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest(hex)
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()}
          })
        if(!user){
            return next(new ErrorHandler('Password reset token is invalid or has been expired', 400))

        }
        if(req.body.password !== req.body.confirmPassword){
            return next(new ErrorHandler('Password does not match',400))
        }

        //setup new password
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();
        sendToken(user, 200, res);
  
})