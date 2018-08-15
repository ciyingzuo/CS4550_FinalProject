module.exports = app => {

    const userModel = require('../user.model.server');

    createUser = (req, res) => {
        userModel.createUser(req.body).then(user => {
            req.session['currentUser'] = user;
            res.send(req.session['currentUser']);
        });
    };

    retrieveUser = (req, res) => {
        userModel.retrieveUser(req.body, "ID").then(user => {
            res.send(user);
        }, err => {
            res.sendStatus(400)
        })
    };

    updateUser = (req, res) => {
        userModel.updateUser(req.body).then(user => {
            res.sendStatus(200);
        });
    };

    deleteUser = (req, res) => {
        userModel.deleteUser(req.body).then(user => {
            res.sendStatus(200);
        });
    };

    login = (req, res) => {
        const user = req.body;
        userModel.retrieveUser({username: req.body.username, password: req.body.password}, "credential")
            .then(user => {
                if (user) {
                    req.session['currentUser'] = user;
                    res.send(req.session['currentUser']);
                } else {
                    res.sendStatus(403)
                }
            }, err => {
                res.sendStatus(400)
            });
    };

    logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

    currentUser = (req, res) => {
        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => res.send(user))
        } else {
            res.sendStatus(403)
        }
    };

    addFriend = (req, res) => {
        userModel.retrieveUser({_id: req.params['userID']}, "ID").then(user => {
            user.friendList.push(req.session['currentUser']._id);
            userModel.updateUser(user);
        });

        userModel.retrieveUser(req.session['currentUser'], "ID")
            .then(user => {
                user.friendList.push(req.params['userID']);
                return userModel.updateUser(user)
            })
    }

    removeFriend = (req, res) => {
        userModel.retrieveUser({_id: req.params['userID']}, "ID").then(user => {
            user.friendList.pull(req.session['currentUser']._id);
            userModel.updateUser(user);
        });

        userModel.retrieveUser(req.session['currentUser'], "ID")
            .then(user => {
                user.friendList.pull(req.params['userID']);
                return userModel.updateUser(user)
            })
    }

    addBlock = (req, res) => {
        userModel.retrieveUser(req.session['currentUser'], "ID")
            .then(user => {
                user.blockList.push(req.params['userID']);
                return userModel.updateUser(user)
            })
    };

    removeBlock = (req, res) => {
        userModel.retrieveUser(req.session['currentUser'], "ID")
            .then(user => {
                user.blockList.pull(req.params['userID']);
                return userModel.updateUser(user)
            })
    };

    app.post('/user', createUser);
    app.get('/user/:userID', retrieveUser);
    app.put('/user', updateUser);
    app.delete('/user/:userID', deleteUser);
    app.post('/user/login', login);
    app.get('/user/logout', logout);
    app.get('/user/currentUser', currentUser);
    app.post('/user/addFriend/:userID', addFriend);
    app.post('/user/removeFriend/:userID', removeFriend);
    app.post('/user/addBlock/:userID', addBlock);
    app.post('/user/removeBlock/:userID', removeBlock);


};