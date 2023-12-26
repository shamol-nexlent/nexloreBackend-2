import { UserController } from "./controllers/UserController";

const userIdToRemove = 3;

const removedUser = UserController.removeUser(userIdToRemove);
console.log("Removed User:", removedUser);

const specificUser = UserController.getUser(2);
console.log("Specific User:", specificUser);

const allUsers = UserController.getAllUsers();
console.log("All Users:", allUsers);
