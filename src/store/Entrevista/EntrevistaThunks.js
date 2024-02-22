import {
  getEntrevistaById,
  getEntrevistasMentorService,
} from "../../service/entrevista";
import { setEntrevista, setEntrevistas } from "./EntrevistaAppSlice";

export const startLoadingEntrevistas = () => {
  return async (dispatch, getState) => {
    const entrevistaStore = getState().entrevista.entrevistas;
    const id = getState().auth.id || localStorage.getItem("id");
    if (!id) throw new Error("El ID del usuario no existe");
    if (!entrevistaStore[0].id) {
      const entrevistas = await getEntrevistasMentorService(id);
      if (entrevistas.status == 200) {
        console.log(entrevistas.data);
        dispatch(setEntrevistas(entrevistas.data));
      }
    }
  };
};

export const startLoadingEntrevista = () => {
  return async (dispatch, getState) => {
    const entrevista_id =
      getState().entrevista.entrevista.id ||
      localStorage.getItem("entrevista_id");
    if (!entrevista_id) throw new Error("El ID de la entrevista no existe");

    const entrevista = await getEntrevistaById(entrevista_id);
    if (entrevista.status == 200) {
      console.log(entrevista.data);
      dispatch(setEntrevista(entrevista.data));
    }
  };
};
