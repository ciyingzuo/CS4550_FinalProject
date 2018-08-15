const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    name: String,
    date: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    member: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
}, {collection: 'group'});