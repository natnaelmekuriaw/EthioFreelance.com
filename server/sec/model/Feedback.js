const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = Schema({
        email: {
            type: String,
            required: true,
        }, 
        message: {
            type: String,
            required: true
        },
        sentdate: {
            type: Date,
            default: Date.now
        },
    
});

module.exports = mongoose.model('feedback', FeedbackSchema);
