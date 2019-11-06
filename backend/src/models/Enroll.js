const mongoose = require('mongoose');

const EnrollSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    },
    status: Number
});

module.exports = mongoose.model('Enroll', EnrollSchema);