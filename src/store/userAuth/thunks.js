import Swal from "sweetalert2";
import { loginMentor } from "../../service/mentor";
import {
  chekingCredentials,
  login,
  logout,
  setId,
  setToken,
} from "./userAuthSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startLoginWithEmailPassword = ({ correo, password }) => {
  return async (dispatch) => {
    try {
      // const user = selectUser(getState()); // Usar getState para obtener el estado actual
      // console.log(user);

      const result = await loginMentor({ correo, password });

      if (result.status >= 400) {
        Swal.fire({
          title: "Datos incorrectos",
          text: "No autorizado",
          timer: 3000,
          icon: "error",
        });
        return dispatch(logout(result.data.message));
      } else {
        dispatch(setId(result.data.user.id));
        dispatch(setToken(result.data.token));
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("id", result.data.user.id);
        console.log({ token: result.data.token, ...result.data.user });
        return dispatch(
          login({ token: result.data.token, ...result.data.user })
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error as needed, e.g., show an error message
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logout({ errorMessage: null }));
  };
};

// export const startCreatingUserWithEmailPassword = ({
//   email,
//   password,
//   displayName,
//   photoURL,
//   userType,
// }) => {
//   return async (dispatch) => {
//     dispatch(chekingCredentials());

//     const { ok, uid, errorMessage } = await registerUserWithEmailPassword({
//       email,
//       password,
//       displayName,
//       photoURL,
//       userType,
//     });

//     if (!ok) return dispatch(logout({ errorMessage }));
//     else return dispatch(login({ uid, displayName, email, photoURL }));
//   };
// };
