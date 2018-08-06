const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    name: String,
    date: String,
    numberOfPost: Number,
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messageModel'
    }],
}, {collection: 'post'});