const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: {
        type: [String],
        required: true
    },
    gitHubRepos: { type: String, required: true },
    figmaDesign: { type: String, required: true },
    imageCover: { type: String, required: true },
    sliderImages: {
        type: [String],
        required: true
    },
    tags: {
        type: [String],
        required: true
    }

}, { versionKey: false });

module.exports = mongoose.model('Work', workSchema);