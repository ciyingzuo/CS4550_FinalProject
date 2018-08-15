const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    starter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
}, {collection: 'conversation'});