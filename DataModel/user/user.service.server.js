module.exports = app => {

    const userModel = require('../user.model.server');

    findAllUsers = (req, res) =>
        userModel.findAllUsers()
            .then(users => {
                res.send(users);
            });

    login = (req, res) => {
        const user = req.body;
        userModel.findUserByCredentials(user.username, user.password)
            .then(user => {
                if(user) {
                    req.session['currentUser'] = user;
                    res.send(req.session['currentUser']);
                } else {
                    res.sendStatus(403)
                }
            });
    };

    logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

    currentUser = (req, res) => {
        const currentUser = req.session['currentUser'];
        if (currentUser) {
            userModel.findUserByIdExpanded(currentUser._id)
                .then(user => res.send(user))
        } else {
            res.sendStatus(403)
        }
    };

    createUser = (req, res) => {
        userModel.createUser(req.body).then(user => {
            req.session['currentUser'] = user;
            res.send(req.session['currentUser']);
        });
    };

    updateUser= (req, res) => {
        userModel.updateUser(req.body).then(user => {
            res.sendStatus(200);
        });
    }

    deleteUser = (req, res) => {
        userModel.deleteUser(req.body).then(user => {
            res.sendStatus(200);
        });
    }

    app.post('/user', createUser);
    app.get('/user/:userID', retriveUser);
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