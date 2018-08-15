const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
}, {collection: 'post'});