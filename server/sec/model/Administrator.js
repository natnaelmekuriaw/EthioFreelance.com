const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    // adminID: {
    //     type: String,
    //     required: true
    // },//optional the system may assign

    firstName: {
        type: String,
        required: [true, "can't be blank"]
    },
    middleName: {
        type: String,
        required: [false, "can't be blank"]
    },
    lastName: {
        type: String,
        required: [true, "can't be blank"]
    },
    sex: {
        type: String,
        required: [true, "can't be blank"]
    },
    age: {
        type: Number,
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    password: {
        type: String,
        required: [true, "can't be blank"],
    },
    accountType: {
        type: String,
        required: [true, "can't be blank"],
    },
    
});


adminSchema.pre(
  'save',
  async function(next) {
    //const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  }
);

adminSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}





module.exports = mongoose.model('administrator', adminSchema);
