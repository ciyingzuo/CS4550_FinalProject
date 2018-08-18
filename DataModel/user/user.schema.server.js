const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String,
    registerDate: Date,
    birthDate: Date,
    isAdmin: Boolean,
    privacy: String,
    friendList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    blockList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    group: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
}, {collection: 'user'});