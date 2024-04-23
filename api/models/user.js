const mongoose = require('mongoose');
const de = require('./de');
const rpd = require('./rpd');

const User = mongoose.model('User', {
    name: String,
    username: String,
    email: String,
    password: String,
    randKey: BigInt,
    appData: {
        de: [de],
        rpd: [rpd]
    }
});

module.exports = User;