"use strict";
const usersArray = [
    { id: 1, userName: "shamol", email: "shamol@gmail.com", postCount: 2 },
    { id: 2, userName: "shamol2", email: "shamol2@gmail.com", postCount: 2 },
    { id: 3, userName: "shamol3", email: "shamol3@gmail.com", postCount: 2 }
];
function getUser(userId) {
    const getingUser = usersArray.filter(user => user.id === userId);
    return getingUser;
}
console.log("getuser", getUser(3));
function findUser(userId) {
    const getingUser = usersArray.filter(user => user.id === userId);
    return getingUser;
}
function getAllUser(users) {
    return users;
}
console.log("getalluser", getAllUser(usersArray));
function removeUser(userId) {
    const remove = usersArray.filter(user => user.id === userId);
    return remove;
}
console.log("removeuser", removeUser(2));
console.log(usersArray);