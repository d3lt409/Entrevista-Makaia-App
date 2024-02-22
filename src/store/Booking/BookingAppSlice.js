import { createSlice } from "@reduxjs/toolkit";

const booking = {
  mentor: {
    id: null,
    correo: null,
    nombres: null,
    status: null,
  },
  aspirante: {
    id: null,
    correo: null,
    nombres: null,
    tipo: null,
    estado: null,
  },
  id: null,
  fecha: null,
};

export const bookingAppSlice = createSlice({
  name: "booking",
  initialState: {
    booking,
    bookings: [booking],
  },
  reducers: {
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    addToBookings: (state, action) => {
      state.bookings.push(action.payload);
    },

    removeBookings: (state, action) => {
      state.bookings = state.bookings.filter((value) => {
        return value.id !== action.payload.id;
      });
      // return state.agenda;
    },
  },
});

export const selectBooking = (state) => state.booking.booking;
export const selectBookingS = (state) => state.booking.bookings;
// Action creators are generated for each case reducer function
export const { setBooking, setBookings, addToBookings, removeBookings } =
  bookingAppSlice.actions;
