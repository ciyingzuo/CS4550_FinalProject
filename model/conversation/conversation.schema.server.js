const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    starter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messageModel'
    }]
}, {collection: 'conversation'});