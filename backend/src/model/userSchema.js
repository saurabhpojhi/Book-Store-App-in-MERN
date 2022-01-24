const mongoose = require('mongoose');


userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
    
})


const User = mongoose.model('USER', userSchema);

module.exports = User;
