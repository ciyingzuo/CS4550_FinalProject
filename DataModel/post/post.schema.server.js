const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    location: String,
    text: String,
    date: Date,
    like: Number,
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
}, {collection: 'post'});

