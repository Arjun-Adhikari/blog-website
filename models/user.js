const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    subject: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('listing', userSchema);
