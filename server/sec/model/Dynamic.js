/* model.js */
'use strict';

var mongoose = require('mongoose'),

const Schema = mongoose.Schema;


  function dynamicModel(suffix) {
      var jobSchema = new Schema(
          {
            catagory: {
                type: String,
                required: [true, "can't be blank"],
              },
              sub_catagory: {
                type: String,
                required: [true, "can't be blank"],
              },
              sample_name: {
                type: String,
                required: [true, "can't be blank"],
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
          }
  );

     return mongoose.model('job_' + suffix, jobSchema);

  }

module.exports = dynamicModel;
