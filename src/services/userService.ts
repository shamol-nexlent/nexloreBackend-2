import { Iuser } from "../models/user";
const usersArray: Iuser[] = [
  { id: 1, userName: "shamol", email: "shamol@gmail.com", postCount: 2 },
  { id: 2, userName: "shamol2", email: "shamol2@gmail.com", postCount: 2 },
  { id: 3, userName: "shamol3", email: "shamol3@gmail.com", postCount: 2 },
];

const getUser = (userId: number) => {
  if (!userId) {
    return null;
  } else {
    const getingUser = usersArray.filter((user) => user.id === userId);
    return getingUser;
  }
};

// console.log("getuser", getUser(3))

const findUser = (userId: number) => {
  if (!userId) {
    return null;
  } else {
    const getingUser = usersArray.filter((user) => user.id === userId);
    return getingUser;
  }
};

const getAllUsers = (): Iuser[] => usersArray;

// console.log("getalluser", getAllUsers(usersArray));

const userIdToRemove = 3;
const removeUser = (userId: number) => {
  const removeElement = usersArray.filter((user) => user.id === userId);
  return removeElement;
};

console.log("removeuser", removeUser(userIdToRemove));
// removeUser(userIdToRemove)
// console.log(usersArray)
