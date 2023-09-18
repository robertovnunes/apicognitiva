const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: String,
    username: String,
    email: String,
    password: String,
    randKey: BigInt
});

module.exports = User;