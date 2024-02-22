import { createSlice } from "@reduxjs/toolkit";

export const mentorAppSlice = createSlice({
  name: "mentor",
  initialState: {
    agenda: [
      {
        id: 0,
        fecha: null,
        estado: false,
        mentora_id: 0,
      },
    ],
  },
  reducers: {
    addToAgenda: (state, action) => {
      state.agenda.push(action.payload);
    },

    removeAgenda: (state, action) => {
      state.agenda = state.agenda.filter((value) => {
        return value.id !== action.payload.id;
      });
      // return state.agenda;
    },

    updateHourAgenda: (state, action) => {
      state.agenda = state.agenda.map((value) => {
        if (value.id === action.payload.id) {
          value.fecha = action.payload.fecha;
        }
        return value;
      });
      // return state.agenda;
    },

    setAgenda: (state, action) => {
      state.agenda = action.payload;
    },
  },
});

export const selectAgenda = (state) => state.mentor.agenda;
// Action creators are generated for each case reducer function
export const { addToAgenda, setAgenda, removeAgenda, updateHourAgenda } =
  mentorAppSlice.actions;
