module.exports = app => {

    const postModel = require('../post.model.server');
    const userModel = require('../user.model.server');
    const messageModel = require('../message.model.server');

    createPost = (req, res) => {
        messageModel.createMessage(req.body).then(message => {
            postModel.createPost({owner: req.params['userID'], message: [message]}).then(post => {
                userModel.retrieveUser({_id: req.params['userID']}).then(user => {
                    user.post().push(post._id);
                    return userModel.updateUser(user);
                })
            })
        });

    };

    retrievePost = (req, res) => {
        postModel.retrievePost(req.params['postID'], "post").then(post => {
            return res.send(post);
        })
    };

    updatePost = (req, res) => {
        postModel.retrievePost(req.params['postID'], "post").then(post => {
            post.message.push(req.body);
            return postModel.updatePost({_id: post._id, message: post.message})
        })
    };

    deletePost = (req, res) => {
        return postModel.deletePost(req.params['postID'])
    };

    findPostForUser = (req, res) => {
        return postModel.retrievePost(req.params['userID'], "user")
    };

    app.post('/post/:userID', createPost);
    app.get('/post/:postID', retrievePost);
    app.put('/post/:postID', updatePost);
    app.delete('/post/:postID', deletePost);
    app.get('/post/findPostForUser/:userID', findPostForUser);
};