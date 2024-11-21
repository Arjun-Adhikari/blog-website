const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const loginSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

loginSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Login', loginSchema);
