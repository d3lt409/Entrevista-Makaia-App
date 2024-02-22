import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { authSlice } from "./userAuth/userAuthSlice";
import { mentorAppSlice } from "./Mentor/MentorAppSlice";
import { entrevistaAppSlice } from "./Entrevista/EntrevistaAppSlice";
import { bookingAppSlice } from "./Booking/BookingAppSlice";
//import productReducer from '../redux/productReducer';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    mentor: mentorAppSlice.reducer,
    entrevista: entrevistaAppSlice.reducer,
    booking: bookingAppSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
