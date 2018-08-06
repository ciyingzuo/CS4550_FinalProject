const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    username: String,
    password: String,
    emailAddress: String,
    registerDate: String,
    accountType: String,
    friendList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    follower: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    group: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groupModel'
    }]
}, {collection: 'user'});