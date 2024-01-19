import { useEffect } from "react";

import { logout, login } from "../store/userAuth/userAuthSlice";

import { useDispatch, useSelector } from "react-redux";
import { getMentorById } from "../service/mentor";

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { token, id, correo, nombres, status } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");
      const storedId = localStorage.getItem("id");
      console.log(storedId);
      if (storedToken) {
        const { id, correo, nombres } = await getMentorById(storedId); // Asegúrate de tener la lógica correcta aquí
        dispatch(
          login({
            id,
            correo,
            nombres,
            token: storedToken,
          })
        );
      } else {
        // Si no hay un token almacenado, o la verificación falla,
        // desloguea al usuario
        dispatch(logout());
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
