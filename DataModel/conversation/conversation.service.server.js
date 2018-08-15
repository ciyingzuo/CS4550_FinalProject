module.exports = app => {

    const conversationModel = require('./conversation.model.server');
    const userModel = require('../user/user.model.server');
    const messageModel = require('../message/message.model.server');

    createConversation = (req, res) => {
        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => {
                    conversationModel.createConversation({
                        starter: user._id, receiver: req.params['userID'], message: []
                    }).then(conversation => {
                        res.send(conversation);
                    })
                })
        } else {
            res.sendStatus(403)
        }
    };

    retrieveConversation = (req, res) => {
        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => {
                    conversationModel.retrieveConversation(user._id, "user").then(conversation => {
                        res.send(conversation);
                    })
                })
        } else {
            res.sendStatus(403)
        }
    };

    updateConversation = (req, res) => {
        if (req.session['currentUser']) {
            userModel.retrieveUser(req.session['currentUser'], "ID")
                .then(user => {
                    const message = req.body;
                    message.from = user._id;
                    messageModel.createMessage(message).then(message => {
                        conversationModel
                            .retrieveConversation(req.params['conversationID'], "conversation")
                            .then(conversation => {
                                conversation.message.push(message);
                                conversationModel.updateConversation(conversation)
                                    .then(conversation => {
                                        res.send(conversation);
                                    })
                            })
                    })

                })
        } else {
            res.sendStatus(403)
        }
    };

    deleteConversation = (req, res) => {
        conversationModel.deleteConversation(req.params['conversationID'])
    }

    app.post('/conversation/:userID', createConversation);
    app.get('/conversation/', retrieveConversation);
    app.put('/conversation/:conversationID', updateConversation);
    app.delete('/conversation/:conversationID', deleteConversation);
};