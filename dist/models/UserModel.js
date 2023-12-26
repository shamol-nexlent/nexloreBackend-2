"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.getAllUsers = exports.getUser = void 0;
const usersArray = [
    { id: 1, userName: "shamol", email: "shamol@gmail.com", postCount: 2 },
    { id: 2, userName: "shamol2", email: "shamol2@gmail.com", postCount: 2 },
    { id: 3, userName: "shamol3", email: "shamol3@gmail.com", postCount: 2 },
];
const getUser = (userId) => {
    if (!userId) {
        return null;
    }
    else {
        const gettingUser = usersArray.find((user) => user.id === userId);
        return gettingUser || null;
    }
};
exports.getUser = getUser;
const getAllUsers = () => usersArray;
exports.getAllUsers = getAllUsers;
const removeUser = (userId) => {
    const updatedUsersArray = usersArray.filter((user) => user.id !== userId);
    return updatedUsersArray;
};
exports.removeUser = removeUser;
