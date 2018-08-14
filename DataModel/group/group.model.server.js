const mongoose = require('mongoose');
const groupSchema = require('./group.schema.server');

const groupModel = mongoose.model('Group', groupSchema);

module.exports = {
};