import { axiosMain } from ".";

export const createEntrevistaService = async (entrevista) => {
  const response = await axiosMain
    .post("entrevista", entrevista, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => response)
    .catch((err) => err);
  if (response.status && response.status < 400) {
    return response;
  }
  return response.response;
};

export const updateEntrevistaService = async (entrevista) => {
  const response = await axiosMain
    .put("entrevista", entrevista, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => response)
    .catch((err) => err);
  if (response.status && response.status < 400) {
    return response;
  }
  return response.response;
};
export const getEntrevistasMentorService = async (mentor_id) => {
  const response = await axiosMain
    .get("entrevista/mentor/" + mentor_id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => response)
    .catch((err) => err);
  if (response.status && response.status < 400) {
    return response;
  }
  return response.response;
};

export const getEntrevistaById = async (entrevista_id) => {
  const response = await axiosMain
    .get("entrevista/" + entrevista_id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => response)
    .catch((err) => err);
  if (response.status && response.status < 400) {
    return response;
  }
  return response.response;
};
