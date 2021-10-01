const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FAQSchema = Schema({
    questionID: {
        type: Number,
        required: true
    },//optional the system may assign

    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('faq', FAQSchema);
