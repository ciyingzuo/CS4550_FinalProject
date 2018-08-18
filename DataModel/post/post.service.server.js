module.exports = app => {

    const postModel = require('./post.model.server');
    const userModel = require('../user/user.model.server');
    const messageModel = require('../message/message.model.server');

    createPost = (req, res) => {
        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => {
                    postModel.createPost({
                        owner: user._id,
                        message: [],
                        text: req.body.text,
                        like: 1,
                        location: req.body.location
                    }).then(post => {
                        userModel.retrieveUser({_id: user._id}, "ID").then(user => {
                            user.post.push(post._id);
                            userModel.updateUser(user).then(user => res.send(user));
                        })
                    })

                })
        } else {
            res.sendStatus(403)
        }
    };

    retrievePost = (req, res) => {
        postModel.retrievePost(req.params['postID'], "post").then(post => {
            res.send(post);
        })
    };

    updatePost = (req, res) => {

        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => {
                    const message = req.body;
                    message.from = user._id;
                    messageModel.createMessage(message).then(message => {
                        postModel.retrievePost(req.params['postID'], "post").then(post => {
                            post.message.push(message);
                            postModel.updatePost(post).then(post => res.send(post))
                        })
                    })
                })
        } else {
            res.sendStatus(403)
        }
    };

    deletePost = (req, res) => {
        postModel.deletePost(req.params['postID']).then(res.sendStatus(200))
    };

    findPostForUser = (req, res) => {
        postModel.retrievePost(req.params['userID'], "user").then(post => {
            if(post === []){

            }

            res.send(post)})
    };

    app.post('/post/', createPost);
    app.get('/post/:postID', retrievePost);
    app.put('/post/:postID', updatePost);
    app.delete('/post/:postID', deletePost);
    app.get('/post/findPostForUser/:userID', findPostForUser);
};