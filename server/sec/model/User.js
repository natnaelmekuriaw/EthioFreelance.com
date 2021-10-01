const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "can't be blank"],
    unique: true
  },
  firstname: {
    type: String,
    required: [true, "can't be blank"],
  },
  lastname: {
    type: String,
    required: [true, "can't be blank"],
  },
  accountType: {
    type: String,
    required: [true, "can't be blank"],
  },
  username: {
    type: String, 
    required: [true, "can't be blank"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "can't be blank"],
  },
  accountStatus:{
    type: String,

  },
  totalMoneyMade:{
type: Number,

  },
  remainingMoney: {
type: Number,

  },

});

UserSchema.pre(
  'save',
  async function(next) {
    //const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  }
);

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}

const UserModel = mongoose.model('user', UserSchema);

//Generate password reset token
UserSchema.methods.getResetPasswordToken = function(){
  //Generate token
  const resetToken = crypto.randomBytes(20).toString('hex');
  
  //Hash and set to resetPasswordToken
  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

  //set token exprire time
  this.resetPasswordExpire = Date.now() + 30 * 30 * 1000

  return resetToken
}

//Return JWT token
UserSchema.methods.getJWTToken = function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRES_TIME
  });
}

module.exports = UserModel; 
