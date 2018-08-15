const mongoose = require('mongoose');
const conversationSchema = require('./conversation.schema.server');

const conversationModel = mongoose.model('Conversation', conversationSchema);

createConversation = conversation => {
    return conversationModel.create(conversation)
};

retrieveConversation = (ID, by) => {
    if(by === "user"){
        return conversationModel.find({starter: ID}).concat(conversationModel.find({receiver: ID}))
    } else if(by === "conversation"){
        return conversationModel.findOne({_id: ID});
    }
};

updateConversation = conversation => {
    return conversationModel.update({_id: conversation._id},{
        message: conversation.message
    })
};

deleteConversation = conversationID => {
    return conversationModel.remove({_id: conversationID})
};

module.exports = {
    createConversation,
    retrieveConversation,
    updateConversation,
    deleteConversation,
};