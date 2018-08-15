const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    date: String,
    text: String,
    type: String,
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {collection: 'message'});