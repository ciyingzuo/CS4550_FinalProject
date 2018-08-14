const mongoose = require('mongoose');
const messageSchema = require('./message.schema.server');

const messageModel = mongoose.model('Message', messageSchema);

module.exports = {
};