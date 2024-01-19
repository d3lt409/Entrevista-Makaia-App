import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //'not-authenticated' , 'authenticated'
    id: null,
    correo: null,
    nombres: null,
    token: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated"; //'not-authenticated' , 'authenticated'
      state.id = payload.id;
      state.correo = payload.correo;
      state.nombres = payload.nombres;
      state.token = payload.token;
      state.errorMessage = payload.errorMessage;
    },

    logout: (state, { payload }) => {
      state.status = "not-authenticated"; //'not-authenticated' , 'authenticated'
      state.id = null;
      state.correo = null;
      state.nombres = null;
      state.token = null;
      state.errorMessage = payload?.errorMessage;
    },
    chekingCredentials: (state) => {
      state.status = "checking";
    },

    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setUserLogged: (state, action) => {
      state.userLogged = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.token;
    },
    setId: (state, action) => {
      state.id = action.id;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  chekingCredentials,
  setIsLogged,
  setToken,
  setId,
  setUserLogged,
  setError,
} = authSlice.actions;

// Export the selector to access the address

export const selectUser = (state) => state.auth;

export default authSlice.reducer;
