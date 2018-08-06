const mongoose = require('mongoose');
const postSchema = require('./post.schema.server');

const postModel = mongoose.model('Post', postSchema);

module.exports = {
};