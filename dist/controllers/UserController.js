"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserModel_1 = require("../models/UserModel");
exports.UserController = {
    getUser: (userId) => (0, UserModel_1.getUser)(userId),
    getAllUsers: () => (0, UserModel_1.getAllUsers)(),
    removeUser: (userId) => (0, UserModel_1.removeUser)(userId),
};
