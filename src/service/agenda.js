import { axiosMain } from ".";

export const getAgendaByMentorId = async (mentorId) => {
  const response = await axiosMain
    .get("agenda/mentor/" + mentorId, {
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

export const updateAgenda = async (agenda) => {
  const response = await axiosMain
    .put("agenda", agenda, {
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

export const deleteAgenda = async (id) => {
  const response = await axiosMain
    .delete("agenda/" + id, {
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
