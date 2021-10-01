const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingReviewSchema = Schema({
    // UserID: {
    //     type: String,
    //     required: true
    // },//optional the system may assign

    rating: {    
        type: Number,
        required: true
    },
    review: {
        type: String,
        // default: "",
        required: false
    },
});

module.exports = mongoose.model('rating_review', RatingReviewSchema);
