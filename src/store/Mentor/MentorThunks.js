import { getAgendaByMentorId } from "../../service/agenda";
import { setAgenda } from "./MentorAppSlice";

export const startLoadingAgenda = () => {
  return async (dispatch, getState) => {
    const agendaStore = getState().mentor.agenda;
    const id = getState().auth.id || localStorage.getItem("id");
    if (!id) throw new Error("El ID del usuario no existe");
    if (!agendaStore[0].id || agendaStore[0].id == 0) {
      const agenda = await getAgendaByMentorId(id);
      if (agenda.status == 200) {
        dispatch(setAgenda(agenda.data));
      }
    }
  };
};
