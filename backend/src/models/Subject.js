const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    cod: String,
    name: String,
});

module.exports = mongoose.model('Subject', SubjectSchema);