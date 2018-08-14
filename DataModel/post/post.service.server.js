module.exports = app => {
    app.post('/post', createPost);
    app.get('/post/:postID', retrivePost);
    app.put('/post/:postID', updatePost);
    app.delete('/post/:postID', deletePost);
    app.get('/post/findPostForUser/:userID', findPostForUser);
    app.get('/post/replyToPost/:postID', replyToPost)
};