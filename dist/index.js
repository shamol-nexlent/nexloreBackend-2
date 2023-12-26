"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("./controllers/UserController");
const userIdToRemove = 3;
const removedUser = UserController_1.UserController.removeUser(userIdToRemove);
console.log("Removed User:", removedUser);
const specificUser = UserController_1.UserController.getUser(2);
console.log("Specific User:", specificUser);
const allUsers = UserController_1.UserController.getAllUsers();
console.log("All Users:", allUsers);