const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String,
    registerDate: String,
    isAdmin: Boolean,
    friendList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    blockList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    group: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groupModel'
    }],
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'postModel'
    }],
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messageModel'
    }]
}, {collection: 'user'});