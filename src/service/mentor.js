import { axiosMain } from ".";

export const getMentorById = async (id) => {
  const response = await axiosMain
    .get("mentor/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => response)
    .catch((err) => err);
  if (response.status && response.status < 400) {
    return response;
  }
  return response.response;
};

export const loginMentor = async (data) => {
  const response = await axiosMain
    .post("users/login", data)
    .then((response) => response)
    .catch((err) => err);
  if (response.status && response.status < 400) {
    return response;
  }
  return response.response;
};
