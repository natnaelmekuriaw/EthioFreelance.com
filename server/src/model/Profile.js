const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  freelancer: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: false
  },
  aboutyou: {
    type: String,
    required: [true, "can't be blank"],
  },
  appliedJobs: [
      {
          jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
      }
  ],
  hired: [
        {
            jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
            message: { type: String }
        }
    ],
    completed: [
        {
            jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
        }
    ],

  skill: [],
  headline: {
    type: String,
    required: [true, "can't be blank"],
  },
  employment:[ {
    companyName: {
        type: String,
        required: [true, "can't be blank"],
    },
    position:{
        type: String,
        required: [true, "can't be blank"],
    },
    startDateYear: {
        type: String,
        required: [true, "can't be blank"],
    },
    startDateMonth: {
        type: String,
        required: [true, "can't be blank"],
    },
    endDateYear: {
        type: String,
        required: [true, "can't be blank"],
    },
    endDateMonth: {
        type: String,
        required: [true, "can't be blank"],
    },
    status: {
        type: String,
        required: [false, "can't be blank"],
    },
    summary: {
        type: String,
        required: [true, "can't be blank"],
    },

  }],
  education:[ {
    schoolName: {
        type: String,
        required: [true, "can't be blank"],
    },
    degree: {
        type: String,
        required: [true, "can't be blank"],
    },
    graduationYear: {
        type: String,
        required: [false, "can't be blank"],
    },
    field: {
        type: String,
        required: [true, "can't be blank"],
    }
  }],
  certificate: [{
    certificateName: {
        type: String,
        required: [true, "can't be blank"],
    },
    organizationName: {
        type: String,
        required: [true, "can't be blank"],
    },
    licenseNumber: {
        type: String,
        required: [true, "can't be blank"],
    },
    year: {
        type: String,
        required: [true, "can't be blank"],
    },
    
}], 
});

const ProfileModel = mongoose.model('profile', ProfileSchema);

module.exports = ProfileModel;