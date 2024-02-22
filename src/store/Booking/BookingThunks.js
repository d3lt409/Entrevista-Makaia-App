import { getBookingByMentor } from "../../service/booking";
import { setBookings } from "./BookingAppSlice";

export const startLoadingBooking = () => {
  return async (dispatch, getState) => {
    const bookingStore = getState().booking.bookings;
    const id = getState().auth.id || localStorage.getItem("id");
    if (!id) throw new Error("El ID del usuario no existe");
    if (!bookingStore[0] || !bookingStore[0].id) {
      const booking = await getBookingByMentor(id);
      if (booking.status == 200) {
        dispatch(setBookings(booking.data));
      }
    }
  };
};
