const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
const userModel = mongoose.model('User', userSchema);


createUser = user => {
    user.registerDate = Date.now();
    return userModel.create(user)
};

retrieveUser = (user, by) => {
    if (by === "username") {
        return userModel.find({username: user.username})
    } else if (by === "credential") {
        return userModel.findOne({username: user.username, password: user.password})
    } else if (by === "ID") {
        return userModel.findOne({_id: user._id})
    }
};

updateUser = user => {
    return userModel.update({_id: user._id}, {
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber,
        friendList: user.friendList,
        blockList: user.blockList,
        group: user.group,
        post: user.post,
        message: user.message
    })
};

deleteUser = userID => {
    return userModel.remove({_id: userID})
};

module.exports = {
    createUser,
    retrieveUser,
    updateUser,
    deleteUser,
};