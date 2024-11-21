const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    heading: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('post', userSchema);
