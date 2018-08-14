const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    name: String,
    date: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    numberOfMember: Number,
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    conversation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversationModel'
    }],
}, {collection: 'group'});