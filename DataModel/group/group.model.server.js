const mongoose = require('mongoose');
const groupSchema = require('./group.schema.server');

const groupModel = mongoose.model('Group', groupSchema);

createGroup = group => {
    group.date = Date.now();
    return groupModel.create(group)
};

retrieveGroup = (ID, by) => {
    if(by === "name"){
        return groupModel.find({name: ID})
    } else if(by === "group"){
        return groupModel.findOne({_id: ID});
    }
};

updateGroup = group => {
    return groupModel.update({_id: group._id},{
        name: group.name,
        owner: group.owner,
        member: group.member
    })
};

deleteGroup = groupID => {
    return groupModel.remove({_id: groupID})
};

module.exports = {
    createGroup,
    retrieveGroup,
    updateGroup,
    deleteGroup,
};