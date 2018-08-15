module.exports = app => {

    const groupModel = require('./group.model.server');
    const userModel = require('../user/user.model.server');
    const conversationModel = require('../conversation/conversation.model.server');

    createGroup = (req, res) => {
        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => {
                    conversationModel.createConversation({starter: user._id, message: []}).then(conversation => {
                        const group = req.body;
                        group.conversation = conversation._id;
                        group.owner = user._id;
                        group.member = [user._id];
                        groupModel.createGroup(group).then(group => {
                            user.group.push(group._id);
                            userModel.updateUser(user).then(res.send(group))
                        })
                    })
                })
        } else {
            res.sendStatus(403)
        }
    };

    retrieveGroup = (req, res) => {
        groupModel.retrieveGroup(req.params['name']).then(group => res.send(group))
    };

    updateGroup = (req, res) => {
        groupModel.updateGroup(req.body).then(group => res.send(group))
    };

    deleteGroup = (req, res) => {
        groupModel.deleteGroup(req.params['groupID']).then(res.sendStatus(200))
    };

    joinGroup = (req, res) => {
        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => {
                    groupModel.retrieveGroup(req.params['groupID'], "group").then(group => {
                        group.member.push(user._id);
                        groupModel.updateGroup(group).then(updated => {
                            user.group.push(group._id);
                            userModel.updateUser(user).then(user => res.send(user))
                        })
                    })
                })
        } else {
            res.sendStatus(403)
        }
    };

    leaveGroup = (req, res) => {
        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => {
                    groupModel.retrieveGroup(req.params['groupID'], "group").then(group => {
                        group.member.pull(user._id);
                        groupModel.updateGroup(group).then(updated => {
                            user.group.pull(group._id);
                            userModel.updateUser(user).then(user => res.send(user))
                        })
                    })
                })
        } else {
            res.sendStatus(403)
        }
    };
    app.post('/group', createGroup);
    app.get('/group/:name', retrieveGroup);
    app.put('/group/:groupID', updateGroup);
    app.delete('/group/:groupID', deleteGroup);
    app.get('/group/joinGroup/:groupID', joinGroup);
    app.get('/group/leaveGroup/:groupID', leaveGroup);
};