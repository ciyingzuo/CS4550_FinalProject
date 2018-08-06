const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    date: String,
    text: String,
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'conversationModel'
    }
}, {collection: 'message'});