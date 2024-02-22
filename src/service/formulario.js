import { axiosMain } from ".";

export const createForm = async (data) => {
  const response = await axiosMain
    .post("formulario", data)
    .then((response) => response)
    .catch((err) => err);
  if (response.status && response.status < 400) {
    return response;
  }
  return response.response;
};
