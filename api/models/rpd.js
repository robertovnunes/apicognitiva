const mongoose = require('mongoose');

const Rpd = mongoose.model('Rpd', {
    data: String,
    situacao: String,
    pensamento: String,
    emocaosentimento: String,
    comportamento: String
});

module.exports = Rpd;