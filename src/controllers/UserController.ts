import { IUser, getUser, getAllUsers, removeUser } from "../models/UserModel";

export const UserController = {
  getUser: (userId: number): IUser | null => getUser(userId),
  getAllUsers: (): IUser[] => getAllUsers(),
  removeUser: (userId: number): IUser[] => removeUser(userId),
};
