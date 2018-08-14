const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messageModel'
    }],
}, {collection: 'post'});