const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    matricula: Number,
    name: String,
    password: String,
    typeUser: Number,
});

module.exports = mongoose.model('User',UserSchema);