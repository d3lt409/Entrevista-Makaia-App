import { axiosMain } from ".";

export const getUsers = async () => {
  return await axiosMain.get("aspirante").then((users) => users.data);
};

export const getUserbyId = async (id) => {
  return await axiosMain.get("aspirante/" + id).then((user) => user.data);
};
