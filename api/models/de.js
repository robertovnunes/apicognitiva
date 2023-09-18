const mongoose = require('mongoose');

const De = mongoose.model('De', {
    data: String,
    hora: String,
    emocao: String
});

module.exports = De;