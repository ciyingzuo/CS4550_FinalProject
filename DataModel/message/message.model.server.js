const mongoose = require('mongoose');
const messageSchema = require('./message.schema.server');
const messageModel = mongoose.model('Message', messageSchema);

createMessage = message => {
    return messageModel.create(message)
};

retrieveMessage = (ID, by) => {
    if (by === "user") {
        return messageModel.find({from: ID})
    } else if (by === "message") {
        return messageModel.find({_id: ID})
    }
};

updateMessage = message => {

};

deleteMessage = messageID => {
    return messageModel.remove({_id: messageID})
};


module.exports = {
    createMessage,
    retrieveMessage,
    updateMessage,
    deleteMessage,
};