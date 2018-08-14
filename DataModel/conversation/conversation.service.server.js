module.exports = app => {
    app.post('/conversation', createConversation);
    app.get('/conversation/:conversationID', retriveConversation);
    app.put('/conversation/:conversationID', updateConversation);
    app.delete('/conversation/:conversationID', deleteConversation);
    app.get('/conversation/findPostForUser/:userID', findConversationForUser);
    app.get('/conversation/joinGroup/:conversationID', addMessage);
};