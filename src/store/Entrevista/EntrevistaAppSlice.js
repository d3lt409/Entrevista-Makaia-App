import { createSlice } from "@reduxjs/toolkit";

export const entrevistaAppSlice = createSlice({
  name: "entrevista",
  initialState: {
    entrevistas: [
      {
        id: null,
        fecha: null,
        asistida: false,
        booking_id: 0,
        aspirante: {},
        mentor: {},
      },
    ],
    entrevista: {
      id: null,
      fecha: null,
      asistida: false,
      booking_id: 0,
      aspirante: {},
      mentor: {},
    },
  },
  reducers: {
    setEntrevista: (state, action) => {
      state.entrevista = action.payload;
    },

    setEntrevistas: (state, action) => {
      state.entrevistas = action.payload;
    },

    addEntrevistas: (state, action) => {
      state.entrevistas.push(action.payload);
    },

    removeEntrevista: (state, action) => {
      state.entrevistas = state.entrevistas.filter((value) => {
        return value.id !== action.payload.id;
      });
      // return state.agenda;
    },
  },
});

export const selectEntrevistas = (state) => state.entrevista.entrevistas;
export const selectEntrevista = (state) => state.entrevista.entrevista;
// Action creators are generated for each case reducer function
export const {
  addEntrevistas,
  removeEntrevista,
  setEntrevistas,
  setEntrevista,
} = entrevistaAppSlice.actions;
