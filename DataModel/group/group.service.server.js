module.exports = app => {
    app.post('/group', createGroup);
    app.get('/group/:groupID', retriveGroup);
    app.put('/group/:groupID', updateGroup);
    app.delete('/group/:groupID', deleteGroup);
    app.get('/group/findPostForUser/:userID', findGroupForUser);
    app.get('/group/joinGroup/:groupID', joinGroup);
    app.get('/group/leaveGroup/:groupID', leaveGroup);
};