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
      const result = await loginMentor({ correo, password });

      if (result.status >= 400) {
        Swal.fire({
          title: "Datos incorrectos",
          text: "No autorizado",
          timer: 3000,
          icon: "error",
        });
        dispatch(logout(result.data.message));
        return result;
      } else {
        dispatch(setId(result.data.user.id));
        dispatch(setToken(result.data.token));
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("id", result.data.user.id);
        // console.log({ token: result.data.token, ...result.data.user });
        dispatch(login({ token: result.data.token, ...result.data.user }));
        return result;
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
    localStorage.removeItem("id");
    localStorage.removeItem("entrevista_id");
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
