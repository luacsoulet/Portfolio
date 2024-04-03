const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
});

module.exports = mongoose.model('Work', workSchema);