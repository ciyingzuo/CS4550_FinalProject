const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    name: String,
    date: String,
    numberOfMember: Number,
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messageModel'
    }],
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
}, {collection: 'group'});