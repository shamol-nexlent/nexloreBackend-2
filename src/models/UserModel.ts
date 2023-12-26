export interface IUser {
  id: number;
  userName: string;
  email: string;
  postCount: number;
}

const usersArray: IUser[] = [
  { id: 1, userName: "shamol", email: "shamol@gmail.com", postCount: 2 },
  { id: 2, userName: "shamol2", email: "shamol2@gmail.com", postCount: 2 },
  { id: 3, userName: "shamol3", email: "shamol3@gmail.com", postCount: 2 },
];

export const getUser = (userId: number): IUser | null => {
  if (!userId) {
    return null;
  } else {
    const gettingUser = usersArray.find((user) => user.id === userId);
    return gettingUser || null;
  }
};

export const getAllUsers = (): IUser[] => usersArray;

export const removeUser = (userId: number): IUser[] => {
  const updatedUsersArray = usersArray.filter((user) => user.id !== userId);
  return updatedUsersArray;
};
