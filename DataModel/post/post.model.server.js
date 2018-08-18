const mongoose = require('mongoose');
const postSchema = require('./post.schema.server');
const postModel = mongoose.model('Post', postSchema);

createPost = post => {
    post.date = new Date();
    return postModel.create(post)
};

retrievePost = (ID, by) => {
    if (by === "user") {
        console.log("here");
        return postModel.find({owner: ID})
    } else if (by === "post") {
        return postModel.findOne({_id: ID});
    } else if (by === "top10") {
        return postModel.find({}, {$slice: -10}).populate('user').populate(
            {
                path: 'message',
                select: ['_id', 'text'],
                populate: {
                    path: 'from',
                    select: ['_id', 'username']
                }
            }
        )
    }
}

updatePost = post => {
    return postModel.update({_id: post._id}, {
        message: post.message
    })
}

deletePost = postID => {
    return postModel.remove({_id: postID})
};


module.exports = {
    createPost,
    retrievePost,
    updatePost,
    deletePost,
};