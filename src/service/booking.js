import { axiosMain } from ".";

export const getBookingByMentor = async (mentorId) => {
  const response = await axiosMain
    .get(`booking/mentor/${mentorId}/active`, {
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
