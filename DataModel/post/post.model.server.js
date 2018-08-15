const mongoose = require('mongoose');
const postSchema = require('./post.schema.server');
const postModel = mongoose.model('Post', postSchema);

createPost = post => {
    return postModel.create(post)
};

retrievePost = (ID, by) => {
    if(by === "user"){
        return postModel.find({owner: ID})
    } else if(by === "post"){
        return postModel.findOne({_id: ID});
    }
}

updatePost = post => {
    return postModel.update({_id: post._id},{
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