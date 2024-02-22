import { useEffect } from "react";

import { logout, login } from "../store/userAuth/userAuthSlice";

import { useDispatch, useSelector } from "react-redux";
import { getMentorById } from "../service/mentor";
import { startLoadingAgenda } from "../store/Mentor/MentorThunks";

import { jwtDecode } from "jwt-decode";
import {
  startLoadingEntrevista,
  startLoadingEntrevistas,
} from "../store/Entrevista/EntrevistaThunks";
import { startLoadingBooking } from "../store/Booking/BookingThunks";

const isValidToken = () => {
  const storedToken = localStorage.getItem("token");
  if (!storedToken) {
    return false;
  }
  const decodedToken = jwtDecode(localStorage.getItem("token"));
  if (new Date().getTime() >= decodedToken.exp * 1000) {
    return false;
  }
  return true;
};

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { token, id, correo, nombres, status } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");
      const storedId = localStorage.getItem("id");

      if (isValidToken() && storedId) {
        const {
          data: { id, correo, nombres },
          status,
        } = await getMentorById(storedId); // Asegúrate de tener la lógica correcta aquí
        if (status >= 400) {
          dispatch(logout());
          localStorage.removeItem("token");
          localStorage.removeItem("id");
          return;
        }
        dispatch(
          login({
            id,
            correo,
            nombres,
            token: storedToken,
          })
        );
        if (localStorage.getItem("entrevista_id")) {
          await dispatch(startLoadingEntrevista());
        }
        await dispatch(startLoadingBooking());
        await dispatch(startLoadingEntrevistas());
        await dispatch(startLoadingAgenda());
      } else {
        // Si no hay un token almacenado, o la verificación falla,
        // desloguea al usuario
        dispatch(logout());
        localStorage.removeItem("token");
        localStorage.removeItem("id");
      }
    };

    checkAuth();
  }, [dispatch, id, correo, nombres, token]);

  return {
    isAuthenticated: !!token,
    correo,
    status,
    id,
    nombres,
    token,
  };
};
