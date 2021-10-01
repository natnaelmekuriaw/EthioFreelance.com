const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var User = mongoose.model('user');

const Schema = mongoose.Schema;

const JobSchema = new Schema({

  assignedFreelancerID: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: false
  },
  state: {
    type: String,
    default: 'active'
  },
  category: {
    type: String,
    required: [true, "can't be blank"],
  },
  sub_category: {
    type: String,
    required: [true, "can't be blank"],
  },

  sample_name: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "can't be blank"],
  },
  discription: {
    type: String,
    required: [true, "can't be blank"],
  },
  currency: {
    type: String,
    required: [true, "can't be blank"],
  },
  budgetType: {
    type: String,
    required: [true, "can't be blank"],
  },
  
  budget: {
    type: String,
    required: [true, "can't be blank"],
  },
  duration: {
    type: String,
    required: [true, "can't be blank"],
  },
  skillLevel: {
    type: String,
    required: [true, "can't be blank"],
  },
  applicants: [{
    freelancer: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User',
      required: false
    },
    bid: {
        type: String,
        required: false
    },
    proposal: {
        type: String,
        required: false
    },
  },
  ],
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  numberofApplicants: {
    type: Number,
    default: 0,
    required: true
  },
  status: {
      type: String,
      default: 'pending',
      required: true
  },
  result: {
    type: String,
},
},
{ timestamps: true },
);

const JobModel = mongoose.model('alljobs', JobSchema);

module.exports = JobModel;