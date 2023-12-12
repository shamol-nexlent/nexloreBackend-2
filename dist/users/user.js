"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.getAllUsers = exports.findUser = exports.getUser = void 0;
const usersArray = [
    { id: 1, userName: "shamol", email: "shamol@gmail.com", postCount: 2 },
    { id: 2, userName: "shamol2", email: "shamol2@gmail.com", postCount: 2 },
    { id: 3, userName: "shamol3", email: "shamol3@gmail.com", postCount: 2 }
];
const getUser = (userId) => {
    if (!userId) {
        return null;
    }
    else {
        const getingUser = usersArray.filter(user => user.id === userId);
        return getingUser;
    }
};
exports.getUser = getUser;
// console.log("getuser", getUser(3))
const findUser = (userId) => {
    if (!userId) {
        return null;
    }
    else {
        const getingUser = usersArray.filter(user => user.id === userId);
        return getingUser;
    }
};
exports.findUser = findUser;
const getAllUsers = () => usersArray;
exports.getAllUsers = getAllUsers;
// console.log("getalluser", getAllUsers(usersArray));
const userIdToRemove = 3;
const removeUser = (userId) => {
    const removeElement = usersArray.filter(user => user.id === userId);
    return removeElement;
};
exports.removeUser = removeUser;
console.log("removeuser", (0, exports.removeUser)(userIdToRemove));
// removeUser(userIdToRemove)
// console.log(usersArray)
