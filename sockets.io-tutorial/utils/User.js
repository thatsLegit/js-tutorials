let users = [];

exports.userJoins = (id, userName, room) => {
    const user = { id, userName, room };
    users.push(user);
    return user;
}

exports.userFind = id => {
    return users.find(user => user.id === id);
}

exports.userLeave = id => {
    users = users.filter(user => user.id !== id);
}

exports.getRoomUsers = room => {
    return users.filter(user => user.room === room);
}