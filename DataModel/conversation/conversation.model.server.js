const mongoose = require('mongoose');
const conversationSchema = require('./conversation.schema.server');

const conversationModel = mongoose.model('Conversation', conversationSchema);

module.exports = {
};